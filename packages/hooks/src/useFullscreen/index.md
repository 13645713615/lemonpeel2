---
map:
  path: /use-fullscreen
---

# useFullscreen
管理 DOM 全屏的 Hook

## 代码演示

### 基础用法

<demo src="./demo/demo.vue"
  lang="vue"
  title="基础用法"
  desc="使用 ref 设置需要全屏的元素。">
</demo>

## API

```javascript
const { isEnabled, isFullscreen, exitFullscreen, enterFullscreen, toggleFullscreen } = useFullscreen(target,options?:UseDebounceOptions)
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| target   | 必填，DOM 节点或者 ref                    | ` Element | ()=>Element | Ref<Element>`     | -      |
| options | 可选，详见下面的 UseDebounceOptions | `UseDebounceOptions` |  -  |


### UseDebounceOptions

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| onExit     | 可选，退出全屏触发       | `() => void`  | -  |
| onEnter  | 可选，全屏触发	 | `() => void` | `250` |

### Result

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| isFullscreen     | 是否全屏       | `Ref<boolean>`  | -  |
| isEnabled     | 是否支持全屏       | `Ref<boolean>`  | -  |
| enterFullscreen  | 设置全屏 	 | `() => void` | - |
| exitFullscreen  | 	退出全屏 | `() => void` | - |
| toggleFullscreen  | 切换全屏 | `() => void` | - |

