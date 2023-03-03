<template>
    <div>
        <Input v-model="value1" text="双向绑定" />
        <br />
        <Input :model-value="value2" text="单向绑定" />
        <br />
        <Input text="不受控" />
        <pre>value1:{{ value1 }}  value2:{{ value2 }}</pre>
        <button @click="onReset">重置</button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Input from './input.vue';
const value1 = ref('111');
const value2 = ref('222');
function onReset() {
    value1.value = value2.value = ''
}
</script>