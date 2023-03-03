<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-16 11:17:52
 * @LastEditTime: 2023-02-20 11:24:07
-->
<template>
    users: {{ users }} <br /><br /><br />
    state: {{ state }}
</template>
<script setup lang="ts">
import { useRecast } from '@lemonpeel2/hooks';
import { shallowRef } from 'vue-demi';

const users = shallowRef([
    { 'user': 'fred', 'age': 48, id: 1 },
    { 'user': 'barney', 'age': 34, id: 2 },
    { 'user': 'fred', 'age': 40, id: 3 },
    { 'user': 'barney', 'age': 36, id: 4 }
])

const state = useRecast(users, ["user", { "age": (row) => Math.ceil(row.age * 0.8) }])


 useRecast(users, (row) => Math.ceil(row.age * 0.8))


</script>