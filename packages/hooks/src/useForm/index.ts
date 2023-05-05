// import { isReactive, reactive, UnwrapNestedRefs } from "vue-demi"
// import { implement } from "@lemonpeel2/utils"
// import { isFunction } from "lodash";

// type FieldValues = Record<string, any>;


// interface FromOptions<F extends FieldValues> {
//     defaultValues?: F | (() => F),
//     values?: F
// }



// interface FormState<F extends FieldValues> {
//     errors: any,
//     defaultValues: undefined | Readonly<F>;
// }

// export const useForm = <F extends FieldValues = FieldValues>(options: FromOptions<F>) => {

//     const formState = reactive<FormState<F>>({
//         errors: {},
//         defaultValues: isFunction(options.defaultValues) ? undefined : options.defaultValues,
//     });



//     //     const { values, defaultValues } = options;

//     //     const form = values && isReactive(values) ? values : reactive<T>(implement(defaultValues) ?? {} as T);

//     //     return {
//     //         form
//     //     }
//     // }



//     function initializeValues<K extends string>(keys?: K[]): Record<K, any> {
//         if (keys) {
//             return keys.reduce<any>((values, key) => {
//                 values[key] = undefined;
//                 return values;
//             }, {})
//         } else {
//             return {} as any
//         }
//     }