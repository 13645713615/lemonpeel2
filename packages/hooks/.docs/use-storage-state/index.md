---
map:
  path: /use-storage-state
realPath: src/useStorageState/index.zh-CN.md
---

# useStorageState
将状态存储在 localStorage 中的 Hook 。

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="刷新页面后，可以看到输入框中的内容被从 localStorage 中恢复了。">
</demo>

### 存储对象

<demo src="./demo/demo1.vue"
  lang="vue"
  title="存储复杂类型数据"
  desc="useStorageState 会自动处理序列化和反序列化的操作">
</demo>


## API

```javascript
interface UseStorageStateOptions{
    expires?: number
    immediate?:boolean
    storage?: Storage
    wait?: number
}
const state = useStorageState<T>(
   localStoragKey: string,
   defaultValue: T | (() => T), 
   options?: UseStorageStateOptions
)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| localStoragKey   | 必填，本地存储的key                       | ` string`     | -      |
| defaultValue   | 必填，默认值                       | `() => T`、`T`     | -      |
| options | 可选，详见下面的 UseStorageStateOptions | `UseStorageStateOptions` |  -  |


### UseStorageStateOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| expires  | 可选，过期时间，不填永久缓存 | `number` | - |
| immediate  | 可选，立即缓存 | `boolean` | - |
| storage  | 可选，缓存方式 | `Storage` | `localStorage` |
| wait  | 可选，防抖需要延迟的毫秒数 | `number` | `300` |
