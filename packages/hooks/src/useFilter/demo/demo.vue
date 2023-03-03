<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-16 09:09:51
 * @LastEditTime: 2023-02-20 11:14:43
-->
<template>
    <label>
        <span>user : </span>
        <input type="search" v-model="search" />
    </label>
    <ul>
        <li v-for="item in filter" :key="item.id">{{ item.user }} - {{ item.age }}</li>
    </ul>
</template>
<script lang="ts" setup>
import { shallowRef } from "vue-demi"
import { useDebounce, useFilter } from "@lemonpeel2/hooks"

const list = shallowRef([
    { 'user': 'barney', 'age': 36, 'active': true,id:1 },
    { 'user': 'fred', 'age': 40, 'active': false ,id:2},
    { 'user': 'fred', 'age': 10, 'active': true ,id:3}
])

const search = useDebounce(null)

const filter = useFilter(list, (item) => !search.value || item.user == search.value)

</script>
