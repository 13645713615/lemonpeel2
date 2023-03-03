---
map:
  path: /use-timer
---

# useTimer
用 requestAnimationFrame 实现的定时器 Hook 好处是可以在页面不渲染的时候停止执行定时器，比如页面隐藏或最小化等。
。

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法">
</demo>

## API

```javascript
useTimer(
    effect: (count: number, clear: () => void) => void,
    options?: UseTimerOption
)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| effect   | 必填，默认值                      | ` T`     | -      |
| options | 可选，详见下面的 UseTimerOption | `UseTimerOption` |  -  |


### UseTimerOption

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| delay     | 间隔时间       | `number`  | 1000  |
| immediate  | 可选，是否在首次渲染时立即执行 | `boolean` | `false` |
| endTime     | 可选，结束时间       | `number`  | -  |

