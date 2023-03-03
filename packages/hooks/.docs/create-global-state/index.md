---
map:
  path: /create-global-state
realPath: src/createGlobalState/index.md
---

# createGlobalState
创建全局状态

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue">
</demo>


## API

```javascript
const useGlobalState = createGlobalState<T>(defineState: () => T): () => T
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| defineState   | 必填，需要定义的全局变量      | ` () => T`     | -      |
