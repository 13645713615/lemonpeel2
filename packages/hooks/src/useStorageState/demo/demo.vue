<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-06 12:00:32
 * @LastEditTime: 2023-01-06 18:00:22
-->
<template>
    <div>
        <input placeholder="请输入..." v-model="value" />
    </div>
</template>
<script lang="ts" setup>
import { useStorageState } from "@lemonpeel2/hooks"
const value = useStorageState<string>("key1",'Hello')
</script>