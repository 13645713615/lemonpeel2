<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-01 11:27:10
 * @LastEditTime: 2023-02-06 15:36:02
-->
<template>
    value : {{ count }}
</template>
<script lang="ts" setup>
import { useScreenFocus } from '@lemonpeel2/hooks';
import { ref } from 'vue-demi';

const count = ref<number>(0)

useScreenFocus(() => {
    count.value += 1;
})

</script>