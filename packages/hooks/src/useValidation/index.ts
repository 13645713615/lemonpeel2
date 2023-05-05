import { computed, reactive, readonly, watch } from "vue-demi"
import Schema, { Rule, Rules } from "async-validator"
import { MaybeComputedRef, resolveUnref } from "../utils"
import { debounce, isArray } from "lodash"
import { DebounceOptions } from "../useDebounce"
import { fillingRecord } from "@lemonpeel2/utils"

type Fields = Record<string, any>;

export type ValidationRules<T extends Fields> = { [k in keyof T]?: Rule };

export interface ValidationState<T extends Fields> {
    /**
     * 是否正在进行验证
     */
    validating: boolean,
    /**
     * 验证状态
     */
    status: Record<keyof T, ValidationStatus>,
    /**
     * 验证错误消息
     */
    errors: Partial<Record<keyof T, string | undefined>>
}

// 验证状态,true:验证通过,false:验证失败,undefined:未验证
export type ValidationStatus = boolean | undefined | null;

export interface ValidationResult<T extends Fields> {
    state: Readonly<ValidationState<T>>,
    /**
     * 是否是验证成功的，不传则判断整个表单的验证状态
     */

    isValid: (field?: keyof T) => boolean,
    /**
     * 是否是验证失败的，不传则判断整个表单的验证状态
     */
    isInvalid: (field?: keyof T) => boolean,
    /**
     * 验证结果
     */
    getResult: (field: keyof T) => string | false,
    /**
    * 验证
    */
    validate: (callback?: (valid: boolean, failed: ValidationState<T>["errors"]) => void) => Promise<ValidationState<T>["errors"] | undefined>,
    /**
     * 部分验证
     */
    validateField: (field: keyof T | Array<keyof T>, callback?: (errorMessage: ValidationState<T>['errors']) => void) => Promise<ValidationState<T>['errors'] | undefined>,
    /**
     * 移除表单项的校验结果,不传则移除整个表单的校验结果
     */
    clearValidate: (fields?: keyof T | Array<keyof T>) => void,
}

export interface ValidationOptions {
    /**
     * 初始化自动验证一次 
     */
    validateOnInit?: boolean,
    /**
     * 状态发生改变触发验证
     */
    validateOnChange?: boolean | DebounceOptions,

    /**
     * 某个字段校验不通过，那么后边所有的字段就不再校验了。
     */
    first?: boolean,
    /**
     * 同一个字段如果有多个校验规则，一旦出现校验不通过的规则后边的规则就不执行了
     */
    firstFields?: boolean | Array<string>,
}


export function useValidation<T extends Fields>(fields: MaybeComputedRef<T>, rulesOrOptions: ValidationRules<T> | (ValidationOptions & { rules: ValidationRules<T> }), options?: ValidationOptions): ValidationResult<T> {

    // 初始化状态
    const { validateOnInit, validateOnChange, first, firstFields } = (('rules' in rulesOrOptions ? rulesOrOptions : options) || {}) as ValidationOptions;

    const rules = computed(() => ('rules' in rulesOrOptions ? rulesOrOptions.rules as ValidationRules<T> : rulesOrOptions) || {});

    const state = reactive({ errors: {}, validating: false, status: {} }) as ValidationState<T>;

    if (validateOnChange) {
        const { wait = 150, ...options } = validateOnChange === true ? {} : validateOnChange;
        watch(() => resolveUnref(fields), debounce(validate, wait, options), { deep: true });
    }

    if (validateOnInit) validate();

    async function validate(callback?: (valid: boolean, errorMessage: ValidationState<T>['errors']) => void): Promise<ValidationState<T>['errors'] | undefined> {
        state.validating = true;

        const failedsData = resolveUnref(fields);

        const validator = new Schema(rules.value as Rules);

        try {

            await validator.validate(failedsData, { first, firstFields });

            state.errors = {};

            state.status = fillingRecord(Object.keys(failedsData), { value: true })

        } catch (error: any) {
            if ('errors' in error) {

                [state.errors, state.status] = handleError<T>(error.errors, Object.keys(rules.value))

            } else {
                throw error;
            }
        } finally {
            state.validating = false;
        }

        callback?.(isValid(), state.errors);

        return state.errors;
    }


    // 部分验证函数
    async function validateField(field: keyof T | Array<keyof T>, callback?: (errorMessage: ValidationState<T>['errors']) => void): Promise<ValidationState<T>['errors'] | undefined> {

        const fieldsToValidate = isArray(field) ? field : [field];

        if (fieldsToValidate.length === 0) return;

        state.validating = true;

        const fieldValue = resolveUnref(fields);

        const partFields = fieldsToValidate.filter((field) => rules.value[field])

        let errors = {} as ValidationState<T>["errors"];
        let status = {} as ValidationState<T>["status"];

        const validator = new Schema(partFields.reduce((prev, field) => { prev[field] = rules.value[field]; return prev; }, {} as ValidationRules<T>) as Rules);

        try {

            await validator.validate(fieldValue, { firstFields, first })

            for (const field of partFields) {
                errors[field] = undefined;
                status[field] = true;
            }

        } catch (error: any) {
            if ('errors' in error) {

                [errors, status] = handleError<T>(error.errors, partFields)

            } else {
                throw error;
            }
        } finally {
            state.validating = false;
        }

        Object.assign(state.errors, errors);
        Object.assign(state.status, status);

        callback?.(state.errors);

        return errors;
    }

    // 移除表单项的校验结果
    function clearValidate(fieldsToClear?: keyof T | Array<keyof T>): void {
        if (fieldsToClear === undefined) {
            state.errors = {};
            state.status = {} as Record<keyof T, ValidationStatus>
        } else {
            const fieldsArray = isArray(fieldsToClear) ? fieldsToClear : [fieldsToClear];
            for (const field of fieldsArray) {
                state.errors[field] = undefined;
                state.status[field] = undefined;
            }
        }
    }

    function isInvalid(field?: keyof T) {
        if (field !== undefined) {
            return state.status[field] == false
        }

        return Object.keys(resolveUnref(fields)).some(value => state.status[value] == false)
    }

    function isValid(field?: keyof T) {
        if (field !== undefined) {
            return state.status[field] === true;
        }

        return Object.keys(resolveUnref(fields)).every(value => state.status[value] === true)
    }

    function getResult(failed: keyof T): string | false {
        const result = state.errors[failed];
        return result ?? false
    }

    return {
        state: readonly(state) as Readonly<ValidationState<T>>,
        validate,
        validateField,
        isInvalid,
        isValid,
        clearValidate,
        getResult,
    }
}


function handleError<T extends Fields>(validateError: Array<{ field: keyof T, message: string | undefined }>, faileds: Array<keyof T>): [ValidationState<T>['errors'], ValidationState<T>['status']] {

    const errors = fillingRecord(validateError, { value: (error) => error.message, key: "field" });

    const status = fillingRecord(faileds as string[], { length: faileds.indexOf(validateError.at(-1)?.field!) + 1, defaultValue: null, value: (key) => !errors[key] })

    return [errors, status]
}