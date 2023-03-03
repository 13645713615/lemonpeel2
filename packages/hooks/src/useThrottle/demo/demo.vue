<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-01 17:00:00
 * @LastEditTime: 2023-02-01 17:06:13
-->
<template>
    <div>
        <input v-model="throttleValue" placeholder="请输入" />
        <pre>
            throttleValue: {{ throttleValue }}
        </pre>
    </div>
</template>
<script lang="ts" setup>
import { useThrottle } from '@lemonpeel2/hooks';
const throttleValue = useThrottle("111", { wait: 500 })
</script>