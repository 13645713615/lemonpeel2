---
map:
  path: /use-screen-focus
realPath: src/useScreenFocus/index.md
---

# useScreenFocus
屏幕聚焦重新执行

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="你可以点击浏览器外部，再点击当前页面来体验效果（或者隐藏当前页面，重新展示），如果和上一次间隔大于 5000ms，则会重新执行。">
</demo>

## API

```javascript
useScreenFocus(
    listener: (event: Event) => void, 
    options?:UseScreenFocusOptions
):()=>void
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| listener   | 必填，需要执行的函数    | `(event: Event) => void`     | -      |
| options | 可选，详见下面的 useScreenFocusOptions | `useScreenFocusOptions` |  -  |


### useScreenFocusOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| wait     | 重新执行间隔，单位为毫秒       | `number`  | `5000`  |
