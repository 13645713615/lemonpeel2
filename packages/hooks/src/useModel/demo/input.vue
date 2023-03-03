<!-- input.vue -->
<template>
    <div style="margin: 0 5px;">
        <span style="width: 100px;display: inline-block;">{{ props.text }}</span>
        <input v-model="model" placeholder="请输入..." />
    </div>
</template>
<script setup lang="ts">
import { useModel } from '@lemonpeel2/hooks';
import { PropType } from 'vue';
const props = defineProps({ modelValue: { type: String as PropType<string>, default: '' }, text: String });
const emit = defineEmits<{ (event: 'update:modelValue'): void }>();
const model = useModel<string>(() => props.modelValue, emit.bind(null, "update:modelValue"));
</script>