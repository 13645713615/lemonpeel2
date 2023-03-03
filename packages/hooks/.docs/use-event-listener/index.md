---
map:
  path: /use-event-listener
realPath: src/useEventListener/index.md
---

# useEventListener
优雅的使用 addEventListener。

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="点击按钮查看效果。">
</demo>

## API

```javascript
function useEventListener<K extends keyof HTMLElementEventMap>(
    eventName: K,
    listener: (ev: HTMLElementEventMap[K]) => void,
    options?: Options<HTMLElement>,
): void;

function useEventListener<K extends keyof ElementEventMap>(
    eventName: K,
    listener: (ev: ElementEventMap[K]) => void,
    options?: Options<Element>,
): void;

function useEventListener<K extends keyof DocumentEventMap>(
    eventName: K,
    listener: (ev: DocumentEventMap[K]) => void,
    options?: Options<Document>,
): void;

function useEventListener<K extends keyof WindowEventMap>(
    eventName: K,
    listener: (ev: WindowEventMap[K]) => void,
    options?: Options<Window>,
): void;

function useEventListener(eventName: string, listener: Noop, options: Options): void;
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| eventName   | 必填，事件名称                      | ` string`     | -      |
| listener   | 必填，处理函数                      | ` (ev: Event) => void`     | -      |
| options | 可选，详见下面的 UseEventListenerOptions | `UseEventListenerOptions` |  -  |


### UseEventListenerOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| target     | DOM 节点或者 ref       | `(() => TargetValue<T>) ｜ TargetValue<T> ｜ Ref<TargetValue<T>>`  | `window`  |
| capture  | 可选，listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发 | `boolean` | `false` |
| once  | 可选，listener 在添加之后最多只调用一次。如果是 true，listener 会在其被调用之后自动移除。 | `boolean` | `false` |
| passive  | 可选，设置为 true 时，表示 listener 永远不会调用 preventDefault() 。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告 | `boolean` | `false` |

