<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-16 09:09:51
 * @LastEditTime: 2023-02-24 19:26:16
-->
<template>
    <label>
        <span>desc:</span>
        <input type="radio" name="orders" value="desc" v-model="orders" />
    </label>
    <label>
        <span>asc:</span>
        <input type="radio" name="orders" value="asc" v-model="orders" />
    </label>
    <ul>
        <li v-for="item in sorter" :key="item.id">{{ item.user }} - {{ item.age }}</li>
    </ul>
</template>
<script lang="ts" setup>
import { ref, shallowRef } from "vue-demi"
import { useSorter } from "@lemonpeel2/hooks"
import type { OrdersSort } from "@lemonpeel2/hooks"

const list = shallowRef([
    { 'user': 'fred', 'age': 18, id: 1 },
    { 'user': 'barney', 'age': 23, id: 2 },
    { 'user': 'fred', 'age': 15, id: 3 },
    { 'user': 'barney', 'age': 18, id: 4 },
])

const orders = ref<OrdersSort>("asc");

const sorter = useSorter(list.value, "age", orders)

</script>
