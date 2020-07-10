<script>
    import {ID_HOST} from '~/assets/variables.js';
    import Header from '~/layouts/_header.vue';
    import Footer from '~/layouts/_footer';

    export default {
        ID_HOST,
        components: {
            Header,
            Footer,
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

        <nuxt class="main-content"/>

        <Footer/>
    </div>
</template>

