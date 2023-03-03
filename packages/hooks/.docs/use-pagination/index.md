---
map:
  path: /use-pagination
realPath: src/usePagination/index.md
---

# usePagination
常见的分页逻辑

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue">
</demo>


## API

```javascript
const pagination:PaginationResult = usePagination(
    total: MaybeComputedRef<number>,
    options?: PaginationOptions
)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| target   | 必填，总条数或者需要分页的数组                       | `number｜T[]`     | -      |
| options | 可选，详见下面的 Options | `PaginationOptions` |  -  |


### Options

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| defaultCurrent     | 初次请求时的页数  | `number`  | `0`  |
| defaultPageSize  | 默认分页数量 | `number` | `10` |
| immediate  | 创建完成理解触发 | `boolean` | - |
| pageSlot  | 页码显示的个数 | `number` | `5` |
| offsetPage  | 页码显示偏移 | `number` | - |
| updateResetPage  | target 发生改变重置 current | `boolean` | `true` |
| refreshDeps  | refreshDeps 变化，会重置 current 到第一页 | `(WatchSource<unknown> ｜ object)[]` | - |
| onChange  | current、pageSize 发生变化 | `(current: number, pageSize: number): void` | - |
| onShowSizeChange  | pageSize 发生变化 | `(current: number, pageSize: number): void` | - |


### Result

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| data   |分页完的数组   | `ComputedRef<T[]>`     |  `[]`      |
| totalPage   | 总页数   | `ComputedRef<number>`     | -      |
| isPrev | 是否上一步 | `ComputedRef<boolean>` |  -  |
| isNext | 是否下一步 | `ComputedRef<boolean>` |  -  |
| current | 当前页 | `Ref<number>` |  -  |
| pageSize | 当前页数量 | `Ref<number>` |  -  |
| showPageItems | 当前显示的分页组 | `ComputedRef<number[]>` |  -  |
| isNextMore | 省略右边分页选项 | `ComputedRef<boolean>` |  -  |
| isPrevMore | 省略左边分页选项 | `ComputedRef<boolean>` |  -  |
| change | 改变页数和页数大小 | `(page: number, size: number): void;` |  -  |
| changeCurrent | 改变页数 | `(current?: number): void` |  -  |
| changePageSize | 改变页数大小 | `(pageSize?: number): void` |  -  |
| prev | 上一步 | `():void` |  -  |
| next | 下一步 | `():void` |  -  |
