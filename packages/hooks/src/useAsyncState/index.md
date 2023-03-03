---
map:
  path: /use-async-state
---

# useAsyncState
    数据异步状态,在承诺就绪后触发更改

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="承诺就绪后更新状态">
</demo>


## API

```javascript
export interface UseAsyncStateOptions<D, F extends (...args: any[]) => Promise<D>> {
    shallow?: boolean,
    immediate?: boolean,
    onSuccess?: (data: D) => void,
    onError?: (E: unknown) => void,
    params?: Parameters<F> | (() => Parameters<F>)
}
const {state,loading,error,run} = function useAsyncState<D, F extends (...args: any[]) => Promise<D>>(
    func: F, 
    defaultValue: D,
    options?: UseAsyncStateOptions<D, F>
): UseAsyncStateReturn<D, F> 
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| func   | 必填，要解析的promise/异步函数  | ` (...args: any[]) => Promise<D>` | -      |
| defaultValue   | 必填，默认值                       | `D`     | -      |
| options | 可选，详见下面的 UseAsyncStateOptions | `UseAsyncStateOptions` |  -  |


### Options

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| shallow  | 可选，使用shallowRef | `boolean` | - |
| immediate  | 可选，立即执行 | `boolean` | - |
| onSuccess  | 可选，成功回调 | `(data: D) => void` | - |
| onError  | 可选，失败回调 | ` (E: unknown) => void` | - |
| params  | 可选，可传递参数 | `Parameters<F> `、`() => Parameters<F>` | - |
