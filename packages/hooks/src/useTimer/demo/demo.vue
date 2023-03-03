<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-06 17:58:36
 * @LastEditTime: 2023-02-07 09:23:17
-->
<template>
    count: {{ count }}
</template>
<script lang="ts" setup>
import { useTimer } from "@lemonpeel2/hooks"
import { ref } from "vue-demi";

const count = ref(0);

useTimer((n) => {
    count.value = n;
}, { endTime: 6000, delay: 1000, immediate: true })

</script>