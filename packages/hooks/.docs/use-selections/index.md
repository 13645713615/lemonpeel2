---
map:
  path: /use-selections
realPath: src/useSelections/index.md
---

# useSelections
常见联动 Checkbox 逻辑封装，支持多选，单选，全选逻辑，还提供了是否选择，是否全选，是否半选的状态。

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="常见的 Checkbox 联动">
</demo>

## API

```javascript
const result: UeSelectionsResult = useSelections<T>(
    items: MaybeComputedRef<T[]>,
    defaultSelected: T[] = []
)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| items   | 必填，Checkbox 列表                       | `MaybeComputedRef<T[]>`     | -      |
| defaultSelected | 可选，默认选择列表 | `T[]` | -   |


### UeSelectionsResult

| 参数     | 说明                       | 类型      | 
| -------- | -------------------------- | --------- | 
| selected     | 已经选择的元素       | `ComputedRef<T[]>`  | 
| allSelected  | 是否全选 | `WritableComputedRef<boolean>` |
| partiallySelected  | 是否半选 | `ComputedRef<boolean>` |
| isSelected  | 是否被选择 | `(value: T) => boolean` |
| select  | 选择元素 | `(value: T) => void` |
| unSelect  | 取消选择元素 | `(value: T) => void` |
| toggle  | 反选元素 | `(value: T) => void` |
| selectAll  | 选择全部元素 | `() => void` |
| unSelectAll  | 取消选择全部元素 | `() => void` |
| toggleAll  | 反选全部元素 | `() => void` |

