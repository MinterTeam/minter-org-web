<script>
/**
 * Generate static 404 page
 * @TODO remove scripts to eliminate flickering https://github.com/nuxt/nuxt.js/issues/2822#issuecomment-396071948
 */
import Error from '~/layouts/error.vue';
export default {
    components: {
        Error,
    },
};
</script>

<template>
    <Error :error="{status: 404}"/>
</template>
