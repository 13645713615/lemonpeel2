<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-10 16:25:14
 * @LastEditTime: 2023-01-11 18:00:59
-->
<template>
    state : {{ state }}
    keys : {{ keys }}
    <br />
    <button @click="update">Toggle</button>
</template>
<script setup lang="ts">
import { useState } from "@lemonpeel2/hooks"
import {computed} from "vue";

const [state, setState] = useState<Record<string, any>>({ name: "carroll" })

const keys = computed(()=> Object.keys(state))

function update() {
    setState({ color: "red" })
}

</script>