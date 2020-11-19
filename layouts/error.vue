<script>

    export default {
        props: ['error'],
        computed: {
            statusCode() {
                if (this.error.response) {
                    return this.error.response.status;
                } else if (this.error.request) {
                    return this.error.request.status;
                } else if (this.error.status) {
                    // custom status
                    return this.error.status;
                } else if (this.error.statusCode !== 500) {
                    // error's statusCode not used, because it shows invalid 500 on network errors
                    return this.error.statusCode;
                } else {
                    return 0;
                }
            },
            message() {
                if (this.statusCode === 404 && (!this.error.message || this.error.message.indexOf('Request') === -1)) {
                    return "We couldn't find the page you're looking for.";
                }
                // if (this.statusCode === 405) {
                //     return 'Unfortunately, this resource is not available to US persons';
                // }
                // let errorText = getErrorText(this.error, '');
                let errorText = this.error.message;
                //@TODO workaround for https://github.com/axios/axios/issues/2103
                if (errorText === 'timeout of 0ms exceeded') {
                    errorText = 'Network error: request timed out';
                }
                return errorText;
            },
        },
    };
</script>

<template>
    <div class="main-content--error">
        <div class="error__container u-container u-container--small u-section">
            <div class="error__inner">
                <h1 class="error__title u-h1">Error {{ statusCode }}</h1>
                <!--<p class="error__description" v-if="error.statusCode === 404">We couldn't find the page you're looking for.</p>-->
                <p class="error__description" v-if="statusCode === 502">Service is unavailable: {{ error.message }}</p>
                <p class="error__description" v-else-if="statusCode === 504">Request failed with status code 504. <br> Gateway time-out.</p>
                <p class="error__description" v-else-if="statusCode === 503">The webpage is currently unavailable. <br> It may be overloaded or down for maintenance.</p>
                <p class="error__description" v-else>{{ message }}</p>
                <p><a class="error__link link--default" href="/">Return to main page</a></p>

                <img class="error__image" src="/img/error-404.png" srcset="/img/error-404@2x.png 2x" alt="" role="presentation">
            </div>
        </div>
    </div>
</template>
