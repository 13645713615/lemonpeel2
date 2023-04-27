<template>
    <div class="flex">
        <div> 当前断点：{{ breakpoint }} , 宽度：{{ size }}</div>
        <div> 设备：{{ device }}</div>
    </div>
</template>
<script lang="ts" setup>
import { useBreakpoints } from "@lemonpeel2/hooks";

const { define, breakpoint, size } = useBreakpoints();

const device = define({
    md: () => "中屏",
    xl: () => "大屏",
    default: () => "小屏"
})
</script>