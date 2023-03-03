<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-13 09:19:12
 * @LastEditTime: 2023-03-01 22:40:39
-->
<template>
    <button @click="prev" :disabled="!isPrev">prev</button>
    <button :class="getPagerButtonClass(1, 'active')" @click="changeCurrent(1)">1</button>
    <button v-show="isPrevMore" @click="prev">...</button>
    <button :class="getPagerButtonClass(page, 'active')" @click="changeCurrent(page)" v-for="page in showPageItems"
        :key="page">{{ page }}</button>
    <button v-show="isNextMore" @click="next">...</button>
    <button :class="getPagerButtonClass(totalPage, 'active')" @click="changeCurrent(totalPage)">{{ totalPage }}</button>
    <button @click="next" :disabled="!isNext">next</button>
    <select v-model="pageSize">
        <option :value="5">5 / page</option>
        <option :value="10">10 / page</option>
        <option :value="50">50 / page</option>
    </select>
    <ul>
        <li v-for="item in data?.list" :key="item.id">{{ item.name }} - {{ item.email }}</li>
    </ul>
</template>
<script lang="ts" setup>
import { usePagination, useService } from "@lemonpeel2/hooks"
import Mock from 'mockjs';

interface UserListItem {
    id: string;
    name: string;
    gender: 'male' | 'female';
    email: string;
    disabled: boolean;
}


const getList = (current: number, pageSize: number): Promise<{ list: UserListItem[], total: number }> => Promise.resolve(Mock.mock({
    total: 100,
    [`list|${pageSize}`]: [
        {
            id: '@guid',
            name: '@name',
            'gender|1': ['male', 'female'],
            email: '@email',
            disabled: false,
        },
    ],
}))

const { data, run } = useService(getList)

const { current, pageSize, totalPage, prev, next, isPrevMore, isNextMore, isPrev, isNext, showPageItems, changeCurrent } = usePagination(() => data.value?.total || 0, { offsetPage: 1, immediate: true, onChange: run })

function getPagerButtonClass(page: number | undefined, className: string): string {
    return current.value === page ? className : ''
}

</script>

<style scoped>
button.active {
    border-color: #3db938;
    color: #3db938;
}

button:disabled {
    background-color: #ededed;
    opacity: 0.7;
}
</style>