<template>
    <div>
        Username: {{ withLoadingDelayAction.loading.value ? 'Loading..' : withLoadingDelayAction.data }} <br />
        Username: {{ action.loading.value ? 'Loading..' : action.data }} <br />
        <button @click="trigger">请求</button>
    </div>
</template>
<script lang="ts" setup>
import { useService, useLoadingDelayPlugin } from "@lemonpeel2/hooks";
import Mock from 'mockjs';

function getUserName(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 200);
    })
}

const withLoadingDelayAction = useService(getUserName, [useLoadingDelayPlugin({ delay: 300 })])
const action = useService(getUserName)

const trigger = () => {
    action.run();
    withLoadingDelayAction.run();
};

</script>