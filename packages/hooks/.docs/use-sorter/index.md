---
map:
  path: /use-sorter
realPath: src/useSorter/index.md
---

# useSorter
排序数组的 hooks

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="输入框发生变化，返回一个新的排序后的数组。">
</demo>


## API
```javascript
const filte: ComputedRef<T[]> = useSorter<T>(
  collection: MaybeComputedRef<List<T>>,
  iteratees?: MaybeRef<Many<ListIteratee<T>> | Many<ListIterator<T, NotVoid>>>,
  orders?: OrdersSort
)

useSorter(users, ['user', 'age'], ['asc', 'desc']);

useSorter(users, function(o) { return o.user; });

useSorter(users, 'user');

```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| collection   | 必填，一个用来迭代的集合      | `Array`     | -      |
| iteratees | 可选，每次迭代调用的函数 | `Array｜Function｜string` | -   |
| orders | 可选，每次迭代调用的函数 | `string[]｜string` | -   |

