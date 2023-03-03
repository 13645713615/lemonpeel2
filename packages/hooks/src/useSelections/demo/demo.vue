<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-08 15:56:03
 * @LastEditTime: 2023-02-09 14:28:06
-->
<template>
    <div>
        <p>Selected:{{ selected }}</p>
        <button @click="() => index++">添加</button><br />
        <label>
            <input type="checkbox" :checked="allSelected" ref="refs" @input="toggleAll()" />
            <span>Check all</span>
        </label>
        <ul>
            <li v-for="i in index" :key="i">
                <label>
                    <input ref="refList" :checked="isSelected(i)" :value="i" @input="toggle(i)" type="checkbox" />
                    <span>{{ 'item-' + i }}</span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useSelections } from '@lemonpeel2/hooks';
import { ref, watchEffect } from 'vue-demi';

const index = ref(2);

const refs = ref<HTMLInputElement | null>(null);
const refList = ref<HTMLInputElement[]>([])

const { toggle, isSelected, allSelected, toggleAll, selected, partiallySelected } = useSelections<number>(() => refList.value.map((el) => Number(el?.value)))

watchEffect(() => {
    if (refs.value && partiallySelected) {
        refs.value.indeterminate = partiallySelected.value;
    }
})

</script>