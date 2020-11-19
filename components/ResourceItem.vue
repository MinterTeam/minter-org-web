<script>
    export default {
        props: {
            link: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            tag: {
                type: String,
                required: true,
            },
        },
        computed: {
            tagList() {
                return this.tag.split(',').map((item) => item.trim());
            },
        },
        methods: {
            capital(val) {
                return val[0].toUpperCase() + val.toLowerCase().substr(1);
            },
        },
    };
</script>

<template>
    <div class="resource">
        <a class="resource__link" :href="link" target="_blank" rel="noopener">
            <img class="resource__icon" :src="`/img/resources/${icon}.png`" :srcset="`/img/resources/${icon}@2x.png 2x`" alt="" role="presentation">
            <div class="resource__title">{{ title }}</div>
            <div class="resource__tag" v-for="tagItem in tagList" :key="tagItem">{{ capital(tagItem) }}</div>
        </a>
        <slot/>
    </div>
</template>
