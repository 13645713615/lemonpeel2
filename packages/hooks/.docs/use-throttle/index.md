---
map:
  path: /use-throttle
realPath: src/useThrottle/index.zh-CN.md
---

# useThrottle
用来处理节流值的 Hook。

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="只会在输入结束 500ms 后变化。">
</demo>

## API

```javascript
const modelValue = useThrottle<T>(
  defaultValue: T,
  options?: useThrottleOptions<T>
)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| defaultValue   | 必填，默认值                      | ` T`     | -      |
| options | 可选，详见下面的 useThrottleOptions | `useThrottleOptions` |  -  |


### useThrottleOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| change     | 可选，状态发生改变触发       | `(value: T) => void`  | -  |
| wait  | 可选，节流需要延迟的毫秒数 | `number` | `250` |
| leading     | 可选，指定在延迟开始前调用       | `boolean`  | `true`  |
| trailing     | 可选，指定在延迟结束后调用       | `boolean`  | `true`  |

