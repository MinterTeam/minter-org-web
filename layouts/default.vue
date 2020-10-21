<script>
    import {ID_HOST} from '~/assets/variables.js';
    import Header from '~/layouts/_header.vue';
    import Footer from '~/layouts/_footer';
    import Cookies from '~/layouts/_cookies.vue';

    export default {
        ID_HOST,
        components: {
            Header,
            Footer,
            Cookies,
        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    };
</script>

<template>
    <div class="main-wrap">
        <Header/>

        <Cookies/>

        <nuxt class="main-content"/>

        <Footer/>
    </div>
</template>

