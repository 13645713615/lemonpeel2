<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-01 12:00:54
 * @LastEditTime: 2023-02-01 12:03:40
-->
<template>
    <div>
        Username: {{ data }} <br />
        loading: {{ loading }} <br/>
        <button @click="run()">开始</button>
        <button @click="abort()">停止</button>
    </div>
</template>
<script lang="ts" setup>
import { useService, usePollingPlugin } from "@lemonpeel2/hooks";
import Mock from 'mockjs';

function getUserName(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 200);
    })
}

const { data, loading, run, abort } = useService(getUserName, [usePollingPlugin({ errorRetryCount: -1, whenHidden: true, interval: 1000 })])

</script>