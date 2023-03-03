<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-06 17:58:36
 * @LastEditTime: 2023-02-07 15:52:19
-->
<template>
    <button type="button" ref="refs">count: {{ count }}</button>
</template>
<script lang="ts" setup>
import { useEventListener } from "@lemonpeel2/hooks"
import { ref } from "vue-demi";

const refs = ref<HTMLButtonElement | null>(null);
const count = ref<number>(0);

useEventListener("click", () => { count.value++; }, { target: refs })

</script>