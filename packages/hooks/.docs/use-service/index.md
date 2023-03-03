---
map:
  path: /use-service
realPath: src/useService/index.md
---

# useService
    数据异步状态,在承诺就绪后触发更改

## 基础用法
```javascript
const { data,loading,error,run } = useService(target)
```
<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="承诺就绪后更新状态">
</demo>

## Loading Delay
通过设置 useLoadingDelayPlugin 插件，可以延迟 loading 变成 true 的时间，有效防止闪烁
```javascript
useLoadingDelayPlugin({ delay: 300 })
```
<demo src="./demo/loadingDelay.vue"
  lang="vue"
  desc="假如 getUsername 在 300ms 内返回，则 loading 不会变成 true，避免了页面展示 Loading... 的情况">
</demo>


## 轮询
通过设置 usePollingPlugin ，进入轮询模式，会定时触发 service 执行
```javascript
usePollingPlugin({ errorRetryCount : -1, whenHidden : true, interval : 2000})
```
<demo src="./demo/pollingPlugin.vue"
  lang="vue"
  desc="会每隔 2000ms 请求一次 getUsername。同时你可以通过 abort 来停止轮询，通过 run/runAsync 来启动轮询">
</demo>

## 防抖
通过设置 useDebouncePlugin 进入防抖模式，此时如果频繁触发 run 或者 runAsync，则会以防抖策略进行请求
```javascript
useDebouncePlugin({ wait:1000, leading:false, trailing:true, maxWait:1500})
```
<demo src="./demo/debounce.vue"
  lang="vue"
  desc="频繁触发 run，只会在最后一次触发结束后等待 1000ms 执行">
</demo>


## 节流
通过设置 useThrottlePlugin，进入节流模式，此时如果频繁触发 run 或者 runAsync，则会以节流策略进行请求
```javascript
useThrottlePlugin({ wait:1000, leading:true, trailing:true})
```
<demo src="./demo/throttle.vue"
  lang="vue"
  desc="频繁触发 run，只会每隔 1000ms 执行一次。">
</demo>
 

## 缓存 & SWR
如果设置了 useCachePlugin， 会将当前请求成功的数据缓存起来。下次组件初始化时，如果有缓存数据，我们会优先返回缓存数据，然后在背后发送新请求
```javascript
useCachePlugin({cacheKey:'demo', cacheTime:300000, staleTime:0 })
```
<demo src="./demo/cache1.vue"
  lang="vue"
  title="SWR"
  desc="在组件第二次加载时，会优先返回缓存的内容，然后在背后重新发起请求,您可以刷新页面体验">
</demo>

<demo src="./demo/cache3.vue"
  lang="vue"
  title="数据共享"
  desc="初始化时，两个组件只会发起一个请求。并且两篇文章的内容永远是同步的">
</demo>

<demo src="./demo/cache2.vue"
  lang="vue"
  title="数据保持新鲜"
  desc="通过设置 staleTime，我们可以指定数据新鲜时间，在这个时间内，不会重新发起请求。">
</demo>

## API

```javascript
useService<Data, Params extends any[]>(target: Target<Data, Params>): Result<Data, Params>;
useService<Data, Params extends any[]>(target: Target<Data, Params>,options: Options<Data, Params>): Result<Data, Params>;
useService<Data, Params extends any[]>(target: Target<Data, Params>,plugins: Plugin<Data, Params>[]): Result<Data, Params>;
useService<Data, Params extends any[]>(target: Target<Data, Params>,options: Options<Data, Params>, plugins: Plugin<Data, Params>[]): UseServiceResult<Data, Params>
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| target   | 必填，要解析的异步函数  | ` (...args: any[]) => Promise<D>` | -      |
| options | 可选，详见下面的 UseServiceOptions | `UseServiceOptions` |  -  |
| plugins   | 可选，插件                   | `UseServicePlugin`     | -  |


### UseServiceOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| initialValue  | 可选，默认值 | `Data` | - |
| immediate  | 可选，立即执行 | `boolean` | - |
| onCancel  | 可选，失败回调 | `(onBefore?: (params: Params) => void` | - |
| onSuccess  | 可选，成功回调 | `(data: Data, params: Params) => void` | - |
| onError  | 可选，失败回调 | `(e: Error, params: Params) => void` | - |
| onFinally  | 可选，失败回调 | `(params: Params, data?: Data, e?: Error) => void` | - |
| onCancel  | 可选，失败回调 | `(reason?: any) => void` | - |
| params  | 可选，可传递参数 | `Params` ｜ `() => Params` | - |


### Result

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| data  | 数据 | `Ref<Data ｜ undefined>` | - |
| loading  | 加载状态 | `Ref<boolean>` | - |
| error  | 错误消息 | `Ref<unknown>` | - |
| abort  | 取消请求函数 |  `(reason?: any) => void` | - |
| runAsync  | 异步发起请求函数 |  `(...params: Params) => Promise<Data>` | - |
| run  | 发起请求函数 | `(...params: Params) => void`｜`(param: (params: Params) => Params): void` | - |
| refresh  | 使用上一次 params 刷新请求 |  `() => void` | - |
| refreshAsync  | 异步刷新请求 | ` () => Promise<Data>` | - |
