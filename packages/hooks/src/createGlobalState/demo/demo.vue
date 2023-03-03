<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-06 10:38:28
 * @LastEditTime: 2023-02-06 12:05:47
-->
<template>
    <div>
        text: {{ state.text }} <br />
        count: {{ state.count }} <br />
        count1: {{ state1.count }} <br />
        <button @click="() => state.count.value++">累加</button>
    </div>
</template>
<script lang="ts" setup>
import { createGlobalState } from "@lemonpeel2/hooks"
import { computed, ref, watchEffect } from "vue-demi"

const useGlobalState = createGlobalState(() => {
    const count = ref<number>(0);
    const text = computed(() => 'count:' + count.value)
    watchEffect(() => {
        console.log('Count:', count.value)
    })
    return { count, text }
})
const state = useGlobalState();
const state1 = useGlobalState();


</script>