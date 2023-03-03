<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-03 09:49:38
 * @LastEditTime: 2023-02-03 09:49:39
-->
<template>
    <div>
        <button @click="run()">请求</button> <br />
        loading: {{ loading }} <br />
        data: {{ data }}
    </div>
</template>
<script lang="ts" setup>
import { useService, useCachePlugin } from "@lemonpeel2/hooks";
import Mock from 'mockjs';

function getUserName(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Mock.mock('@paragraph'));
        }, 10000);
    })
}

const { data, loading, run } = useService(getUserName, { immediate: true }, [useCachePlugin({ cacheKey: 'cacheKey-demo1' })])

</script>