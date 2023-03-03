---
map:
  path: /use-recast
realPath: src/useRecast/index.md
---

# useRecast
重做数组的 hooks

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="跟随 users 变化返回一个新数组。">
</demo>


## API
```javascript
const state = useRecast<T, R>(
  collection: MaybeComputedRef<List<T>>,
  iteratees: MaybeRef<any>, 
  format?: Formatter<T, R>) 

useRecast(users, function(o) { return {age:o.age * 0.8} });

useRecast(users, { 'age': (r)=> 18, });

useRecast(users, ["user", { "age": (row) => Math.ceil(row.age * 0.8) }]);

useRecast(users, 'user');

```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| collection   | 必填，一个用来迭代的集合      | `Array`     | -      |
| iteratees | 可选，每次迭代调用的函数 | `Array｜Function｜Object｜string` | -   |
| format | 可选，格式化函数 |   `(value: T, index: number, collection: List<T>, key: string) => any` | -   |

