<template>
    <div>
        <input v-model="debouncedValue" placeholder="请输入" />
        <pre>
            debouncedValue: {{ debouncedValue }}
        </pre>
    </div>
</template>
<script lang="ts" setup>
import { useDebounce } from "@lemonpeel2/hooks"
const debouncedValue = useDebounce("111", { wait: 500 })
</script>