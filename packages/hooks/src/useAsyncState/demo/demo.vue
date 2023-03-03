<template>
    <div>
        <div v-if="error">{{ error }}</div>
        <div v-if="loading">加载中...</div>
        <pre v-else>
            {{ JSON.stringify(state) }}
        </pre>
        <button type="button" @click="run([2])">成功</button>
        <button type="button" @click="()=>run([3]).catch((e)=> e)">失败</button>
    </div>
</template>
<script lang="ts" setup>
import { useAsyncState } from "@lemonpeel2/hooks"

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
                    resolve({ name: 'carroll', age: 18, id })
                    break;
                case 2:
                    resolve({ name: 'lemonpeel', age: 100, id })
                    break;
                default:
                    reject("系统错误！")
                    break;
            }
        }, 2000);
    })
}

const { state, loading, run ,error} = useAsyncState<User, typeof getUser>(getUser, { name: "默认名称", age: 12 }, { params: [1], immediate: true })
</script>