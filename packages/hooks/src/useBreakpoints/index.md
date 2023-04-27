---
map:
  path: /use-breakpoints
---

# useBreakpoints
定义设备在不同分辨率下的行为。

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="根据屏幕大小发生变化">
</demo>

## API

```javascript
const { breakpoint,size,breakpoints,define} = useBreakpoints(
  data?: Partial<TBreakpointsState>
)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| data   | 可选，自定义默认断点          | ` Partial<TBreakpointsState>` | `{  sm: 640, md:768, lg: 1024, xl: 1280} `|


### Result

| 参数     | 说明                       | 类型      |
| -------- | -------------------------- | --------- |
| breakpoint     | 当前断点       |     `string`  |
| size  | 当前屏幕大小 | `number` |
| breakpoints  |   Breakpoints 实例   | `Breakpoints`  |
| define     | 定义行为| `<T>({ default: defaultBreakpoint, ...breakpoints }: Partial<Record<TDefineBreakpointsKeys, () => T>>) => ComputedRef<T｜undefined>}`|