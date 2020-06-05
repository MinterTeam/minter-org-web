<script>

    export default {
        layout: 'guest',
        props: ['error'],
    };
</script>

<template>
    <div class="main-content--error">
        <div class="error__container u-container u-container--small u-section">
            <div class="error__inner">
                <h1 class="error__title u-h1">Error {{ error.statusCode }}</h1>
                <p class="error__description" v-if="error.statusCode === 404">We couldn't find the page you're looking for.</p>
                <p class="error__description" v-else-if="error.statusCode === 504">Request failed with status code 504. <br> Gateway time-out.</p>
                <p class="error__description" v-else-if="error.statusCode === 503">The webpage is currently unavailable. <br> It may be overloaded or down for maintenance.</p>
                <p class="error__description" v-else-if="error.message === 'Network Error'">Network Error</p>
                <p class="error__description" v-else>{{ error.message }}</p>
                <p><a class="error__link link--default" href="/">Return to main page</a></p>

                <img class="error__image" src="/img/error-404.png" srcset="/img/error-404@2x.png 2x" alt="" role="presentation">
            </div>
        </div>
    </div>
</template>
