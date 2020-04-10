<template>
    <div id="hello">
        <img :src="logoUrl" alt="logo1">
        <p>Hello,this page is developed by vue2.5.x and webpack4.x</p>
        <div class="mytest">test logo</div>
        <a-button type="primary">Primary</a-button>
        <a-button>Default</a-button>
    </div>
</template>
<script>
    import logoUrl from '../assets/images/logo.png';

    export default {
        name: 'hello',
        data() {
            return {
                logoUrl
            };
        }
    };
</script>

<style lang="less">
    #hello {
        color: #aaa;

        p {
            color: blue;
        }
    }

    img {
        width: 100px;
    }

    .mytest{
        color:red;
        background-image: url("../images/logo.png");
    }
</style>