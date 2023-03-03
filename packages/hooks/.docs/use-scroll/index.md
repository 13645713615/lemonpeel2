---
map:
  path: /use-scroll
realPath: src/useScroll/index.md
---

# useScroll
监听元素的滚动位置

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="尝试滚动一下文字内容。">
</demo>


## API

```javascript
type UseScrollOptions = {
    shouldUpdate?: (value: ScrollPosition) => boolean;
    eventListenerOptions?: AddEventListenerOptions;
    behavior?: ScrollBehavior,
    wait?: number,
}
const { x,y } = useScroll<T extends Target = Document>(
    target: T,
    options?: UseScrollOptions
)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| target   | 必填，DOM 节点或者 ref | ` Element | Document | (() => Element)`| `document`      |
| options | 可选，详见下面的 UseModelOptions | `UseScrollOptions` |  -  |


### UseScrollOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| shouldUpdate | 控制是否更新滚动信息 | `({ top: number, left: number }) => boolean`  | -  |
| eventListenerOptions  | 滚动事件的侦听器选项 | `AddEventListenerOptions` | `{capture: false, passive: true}` |
| behavior | 滚动动画 | `ScrollBehavior`  | `auto`  |
| wait | 滚动事件的限制时间 | `number`  | -  |
