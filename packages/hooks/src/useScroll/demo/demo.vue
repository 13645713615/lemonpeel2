<!--
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-08 14:52:25
 * @LastEditTime: 2023-02-08 15:15:34
-->
<template>
    <div>
        x: {{ x }}<br />
        y: {{ y }}<br />
        <button @click="() => y = 0">回到顶部</button>
        <div ref="refs"
            style="height:160px; width: 160px ;overflow: scroll;whiteSpace: nowrap;border: solid 1px #000;font-size: 36px;line-height:1.5">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex
                excepturi explicabo iste iure labore molestiae neque optio perspiciatis
            </div>
            <div>
                Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda
                consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt
            </div>
            <div>
                Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus
                magni modi mollitia nihil nisi provident
            </div>
            <div>
                Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat,
                quia quisquam repellendus reprehenderit.
            </div>
            <div>
                Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis,
                consectetur corporis cum deserunt distinctio dolore eius est exercitationem
            </div>
            <div>Ab aliquid asperiores assumenda corporis cumque dolorum expedita</div>
            <div>
                Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore
                earum, eum expedita facilis
            </div>
            <div>
                Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque
                dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useScroll } from "@lemonpeel2/hooks"
import { ref } from "vue-demi";

const refs = ref<HTMLElement | null>();

const { x, y } = useScroll(refs, { wait: 500, shouldUpdate: (val) => val.top < 200 })

</script>