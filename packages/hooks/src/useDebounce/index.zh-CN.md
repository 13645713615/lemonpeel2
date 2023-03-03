---
map:
  path: /use-debounce
---

# useDebounce
用来处理防抖值的 Hook。

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="只会在输入结束 500ms 后变化。">
</demo>

## API

```javascript
const modelValue = useDebounce<T>(
  defaultValue: T,
  options?: useDebounceOptions<T>
)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| defaultValue   | 必填，默认值                      | ` T`     | -      |
| options | 可选，详见下面的 useDebounceOptions | `useDebounceOptions` |  -  |


### useDebounceOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| change     | 可选，状态发生改变触发       | `(value: T) => void`  | -  |
| wait  | 可选，防抖需要延迟的毫秒数 | `number` | `250` |
| maxWait     | 可选，允许被延迟的最大值       | `number`  | `1500`  |
| leading     | 可选，指定在延迟开始前调用       | `boolean`  | `false`  |
| trailing     | 可选，指定在延迟结束后调用       | `boolean`  | `true`  |

