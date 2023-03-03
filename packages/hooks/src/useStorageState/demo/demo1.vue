<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-06 15:59:50
 * @LastEditTime: 2023-01-06 18:00:34
-->
<template>
    <div>
        <div>
            <span>名称</span>
            <input placeholder="请输入..." v-model="form.name" />
        </div>
        <br />
        <div>
            <span>年龄</span>
            <input placeholder="请输入..." v-model="form.age" type="number" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useStorageState } from "@lemonpeel2/hooks"
const form = useStorageState<{ name: string, age: number }>("key2", { name: "Carroll", age: 18 })
</script>