<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-06 17:58:36
 * @LastEditTime: 2023-02-07 17:41:24
-->
<template>
    <div ref="refs">
        是否支持全屏 {{ isEnabled }} <br />
        是否全屏 {{ isFullscreen }} <br />
        <button type="button" @click="exitFullscreen">exitFullscreen</button>
        <button type="button" @click="enterFullscreen">enterFullscreen</button>
        <button type="button" @click="toggleFullscreen">toggleFullscreen</button>
    </div>
</template>
<script lang="ts" setup>
import { useFullscreen } from "@lemonpeel2/hooks"
import { ref } from "vue-demi";

const refs = ref<HTMLButtonElement | null>(null);

const { isEnabled, isFullscreen, exitFullscreen, enterFullscreen, toggleFullscreen } = useFullscreen(refs)

</script>