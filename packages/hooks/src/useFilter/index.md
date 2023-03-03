---
map:
  path: /use-filter
---

# useFilter
过滤数组的 hooks

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="输入框发生变化，返回一个新的过滤后的数组。">
</demo>


## API
```javascript
const filte: ComputedRef<T[]> = useFilter<T>(
    collection: MaybeComputedRef<List<T>>,
    predicate?: MaybeRef<ListIterateeCustom<T, boolean>>
)

useFilter(users, function(o) { return !o.active; });

useFilter(users, { 'age': 36, 'active': true });

useFilter(users, ['active', false]);

useFilter(users, 'active');

```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| collection   | 必填，一个用来迭代的集合      | `Array`     | -      |
| predicate | 可选，每次迭代调用的函数 | `Array｜Function｜Object｜string` | -   |
