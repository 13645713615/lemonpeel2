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
        }, 1000);
    })
}

const { data, loading, run } = useService(getUserName, [useCachePlugin({ cacheKey: 'cacheKey-demo2', staleTime: 5000 })])

</script>