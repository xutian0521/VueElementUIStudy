<template>
    <div id="app">
        <img src="../images/logo.png"  alt="logo"/>
        <h1><span>{{msg}}</span></h1>
        <p class="test"> test text</p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
/*--------------------写法一------------------------ */
    export default {
        name:'app',
        data(){
            return {
                msg:"hello vue !!"
            }
        },
    }
/*--------------------写法二------------------------ */
// export default Vue.extend({
//     name:'app2',
//     data(){
//         return {
//             msg:"hello vue~~##"
//         }
//     }
// })
</script>
<style>
    .test{
        color: rgb(2, 107, 126);
    }
</style>

