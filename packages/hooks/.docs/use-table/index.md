---
map:
  path: /use-table
realPath: src/useTable/index.md
---

# useTable
Table 相关逻辑的 hooks

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="封装表格的相关逻辑">
</demo>

## API

```javascript
const { data } = useTable(list, columns,options)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| list   | 必填，表格数据                      | `MaybeComputedRef<T[]>`     | `[]`      |
| columns | 必填，需要展示的列 | `MaybeComputedRef<UseTableColumn<T, K ｜ N, R>[]>` |  `[]`  |
| options | 可选 | `UseTableOptions` |  -  |



### UseTableColumn

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| key     | 这一列的 key，不可重复       | `K`  | -  |
| formatter  | 可选，节流需要延迟的毫秒数 | `Formatter<T, R>` | - |
| sorter     | 可选，这一列的排序方法       | `boolean ｜ ((a: R, b: R) => number)`  | -  |
| sortOrder     | 可选，表格的排序方式       | `OrdersSort`  | -  |
| sortMultiple     | 可选，同一列是否可以排序多个       | `boolean`  | -  |
| filter     | 可选，这一列过滤       | `boolean`  | -  |
| filterValue     | 可选，过滤器的值      | `R`  | -  |


### UseTableOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| onChangeSorte     | 排序发生变化       | `(sorter: SorterOptions<K, R>[]) => void`  | -  |



