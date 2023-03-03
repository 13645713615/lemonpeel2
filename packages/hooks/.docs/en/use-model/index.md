---
map:
  path: /use-model
realPath: src/useModel/index.en-US.md
---

# useModel
用于组件数据进行双向/单向绑定

## 代码演示

### 基础用法

<demo src="./demo/input.vue"
  lang="vue"
  title="基础用法"
  desc="输入框发生变化会向父组件响应，父组件更新状态子组件会同时更新，单独也能运行">
</demo>

### 受控和不受控

<demo src="./demo/demo.vue"
  lang="vue"
  title="受控和不受控">
</demo>

## API

```javascript
interface UseModelOptions {
    immediate?: boolean,
    deep?: boolean
}
const modelValue = useModel<T>(
    getter: () => T,
    emitter?: (value: T) => void,
    options?: UseModelOptions
)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| getter   | 必填，需要监听的值                       | ` () => T`     | -      |
| emitter | 可选，值发生改变的钩子 | `(value: T) => void` | -   |
| options | 可选，详见下面的 UseModelOptions | `UseModelOptions` |  -  |


### UseModelOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| immediate     | 创建完成理解触发 emitter       | `boolean`  | `false`  |
| deep  | 深度监听 getter | `boolean` | `false` |
