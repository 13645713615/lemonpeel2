<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-18 18:25:39
 * @LastEditTime: 2023-01-31 14:55:27
-->
<template>
    data: {{ state.data }} <br />
    error: {{ state.error }} <br />
    loading : {{ state.loading }} <br />
    <button @click="state.run(1)">请求1</button>
    <button @click="state.run(2)">请求2</button>
    <button @click="state.refresh()">刷新</button>
    <button @click="state.abort('取消请求')">取消请求</button>

</template>
<script lang="ts" setup>
import { useService } from "@lemonpeel2/hooks";

interface User {
    name: string;
    age: number;
    id?: number;
}

function getUser(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (id) {
                case 1:
                    resolve({ name: '张三', age: 18, id })
                    break;
                case 2:
                    resolve({ name: '李四', age: 100, id })
                    break;
                default:
                    reject("请求失败!")
                    break;
            }
        }, 3000);
    })
}

const state = useService<User, [number]>(getUser, {
    params: () => [1],
    immediate: false,
    onBefore(...args) {
        console.log("开始请求", args)
    },
    onError(error) {
        console.log("请求失败", error)
    },
    onSuccess(...args) {
        console.log("请求成功", args)
    }
})

</script>