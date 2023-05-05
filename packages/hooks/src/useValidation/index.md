---
map:
  path: /use-validation
---

# useValidation
用来验证数据的 Hook。

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法">
</demo>

## API

```javascript
const { validate } = useValidation(data, { rules ,first:true})
const { validate } = useValidation(data, rules,{first:true})
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| fields   | 必填，需要验证的数据                 | ` MaybeComputedRef<T>`     | -      |
| rules | 必填，验证规则  | `ValidationRules<T>` |  -  |
| options | 可选，详见下面的 [ValidationOptions](#validationoptions) | `useThrottleOptions` |  -  |

### Result
| 参数    | 说明                               |   类型  |
| ------- | --------------------------------- |------- |
| state | 验证状态 |` Readonly<ValidationState<T>>` |
| isValid | 是否是验证成功的，不传则判断整个表单的验证状态 | ` (field?:string) => boolean` |
| isInvalid | 是否是验证失败的，不传则判断整个表单的验证状态 | ` (field?:string) => boolean` |
| getResult |验证结果 | ` (field: string) => string\|false ` |
| validate |验证 | ` (callback?: (valid: boolean, failed: any) => void) => Promise<any>` |
| validateField |部分验证 | `(field:string[]\|string,callback?: (failed: any) => void) => Promise<any>` |
| clearValidate |移除表单项的校验结果,不传则移除整个表单的校验结果 | `(fields?:string[]\|string >) => void` |


### ValidationOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| validateOnChange     | 可选，状态发生改变触发验证     | `boolean\|DebounceOptions`  | -  |
| validateOnInit  | 可选，初始化自动验证一次 | `boolean` | - |
| first     | 可选，某个字段校验不通过，后边所有的字段就不再校验     | `boolean`  | - |
| firstFields     | 可选，字段如果有多个校验规则，一旦出现校验不通过的规则后边的规则不执行    | `boolean`  | - |

