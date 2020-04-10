<template>
    <div id="app">
        <img src="./images/logo.png" alt="logo" />
        <span>{{msg}}</span>
        <p class="test">test text</p>
    </div>
</template>
<script>
    import Vue from 'vue';

    export default {
        name: 'app',
        data() {
            return {
                msg: 'hello vue !!'
            };
        }
    };
</script>

<style>
    .test {
        color: #020202
    }
</style>

<style lang="less">
    #app {
        img {
            width: 100px;
        }
    }
</style>