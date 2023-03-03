---
map:
  path: /use-state
realPath: src/useState/index.md
---

# useState
管理 object 类型 state 的 Hooks 

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="使用 setState 更改数据，省略掉 .value 操作数据">
</demo>


## API

```javascript
const [state, setState] = useState<T extends Record<string, any>>(defaultValue: T)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| defaultValue   | 默认值                       | `T`     | -      |
