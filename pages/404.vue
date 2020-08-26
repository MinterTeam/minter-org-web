<script>
/**
 * Generate static 404 page
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
