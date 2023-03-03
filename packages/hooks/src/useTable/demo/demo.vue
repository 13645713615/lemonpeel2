<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-20 11:36:38
 * @LastEditTime: 2023-03-01 23:44:28
-->
<template>
    <input type="search" placeholder="search..." @blur="changefilter('name', ($event.target as InputHTMLAttributes).value)" />
    <table>
        <thead>
            <tr>
                <th v-for="col in columns" :key="col.key">
                    {{ col.key }}
                    <a @click="changeSorter(col.key)" v-if="col.sorter"> 排序: {{ col.sortOrder }} </a>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td v-for="col in columns" :key="col.key">
                    {{ item[col.key] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts" setup>
import { useTable, UseTableColumn } from "@lemonpeel2/hooks"
import { InputHTMLAttributes, reactive, shallowRef } from "vue-demi"

interface User {
    id: number
    name: string
    age: number,
    height: number
}

const list = shallowRef<User[]>([
    { id: 2, name: "小明", age: 10, height: 123 },
    { id: 1, name: "小红", age: 11, height: 160 },
    { id: 3, name: "小蓝", age: 10, height: 110 },
    { id: 4, name: "小紫", age: 9, height: 140 },
])

const columns = reactive<UseTableColumn<User, any, any>[]>([
    {
        key: "index",
        formatter: (value) => value.id,
        sorter: true,
        sortOrder:"asc"
    },
    {
        key: "name",
        filter: true,
        filterValue: null
    },
    {
        key: "age",
        sorter: true,
        sortMultiple: true
    },
    {
        key: "height",
        formatter: (value) => value.height + "cm",
        sorter: true,
        sortMultiple: true

    }
])


const { data, changeSorter, changefilter } = useTable(list, columns)


</script>