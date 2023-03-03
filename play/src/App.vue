<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-03-02 22:31:04
 * @LastEditTime: 2023-03-02 22:48:18
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import { orderBy } from "@lemonpeel2/utils"
import { useSorter } from "@lemonpeel2/hooks"

const users = [
  { 'user': 'fred', 'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred', 'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

console.log(orderBy(users, ['user', 'age'], ['asc', 'desc']))

console.log(useSorter(users,['user', 'age'], ['asc', 'desc']).value)


</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
