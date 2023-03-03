<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-02 17:43:01
 * @LastEditTime: 2023-02-02 17:52:08
-->
<template>
    <div>
        <input @input="(e: any) => run(e.target.value)" type="text" /><br />
        loading: {{ loading }} <br />
        data: {{ data }} 
    </div>
</template>
<script lang="ts" setup>
import { useService, useDebouncePlugin } from "@lemonpeel2/hooks";
import Mock from 'mockjs';

function getUserName(search?: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Mock.mock({ 'data|5': ['@name'] }).data);
        }, 200);
    })
}

const { data, loading, run } = useService(getUserName, [useDebouncePlugin({ wait: 1000 })])

</script>