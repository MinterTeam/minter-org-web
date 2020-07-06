<script>
    export default {
        props: {
            link: {
                type: String,
                required: true,
            },
            src: {
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
            src2x() {
                return this.src.replace(/(.*)\.(\w{3,4}$)/, '$1@2x.$2');
            }
        },
        methods: {
            capital(val) {
                return val[0].toUpperCase() + val.toLowerCase().substr(1);
            },
        }
    };
</script>

<template>
    <div class="resource-project">
        <a class="resource-project__link" :href="link" target="_blank" rel="noopener">
            <figure class="u-aspect-ratio" style="--aspect-ratio:309/180; width: 309px;">
                <img class="resource-project__image" :src="src" :srcset="src2x + ' 2x'" alt="" role="presentation" width="309" height="180">
            </figure>

            <div class="resource-project__meta u-mb-05">
                <div class="resource__title">{{ title }}</div>
                <div class="resource__tag" v-for="tagItem in tagList">{{ capital(tagItem) }}</div>
            </div>
        </a>
        <slot/>
    </div>
</template>
