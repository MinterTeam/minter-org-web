<script>
    import {ID_HOST} from '~/assets/variables.js';
    import AuthButtonGoogle from '~/components/AuthButtonGoogle.vue';

    export default {
        ID_HOST,
        // fetchOnServer: false,
        // fetch() {
        //     // additional check to workaround generate mode not supporting client middlewares
        //     // check authToken, because profile middleware doesn'nt work on generate
        //     if (hasAuthToken()) {
        //         return this.$router.replace('/share');
        //     }
        // },
        components: {
            AuthButtonGoogle,
        },
        // head() {
        //     const title = 'Minter Development Foundation';
        //     const description = 'We support the research and development of novel methods of value exchange for the public good.';
        //     // const localeSuffix = this.$i18n.locale === 'en' ? '' : '-' + this.$i18n.locale;
        //
        //     return {
        //         title: title,
        //         meta: [
        //             { hid: 'og-title', name: 'og:title', content: title },
        //             { hid: 'description', name: 'description', content: description },
        //             { hid: 'og-description', name: 'og:description', content: description },
        //             // { hid: 'og-image', name: 'og:image', content: `/img/social-share-wallet${localeSuffix}.png` },
        //         ],
        //     };
        // },
        data() {
            return {
                serverError: '',
                // isAuthLoading: false,
            };
        },
    }
</script>

<template>
    <div class="u-section main-content--center">
        <div class="u-container">
            <div class="intro">
                <img class="intro__image" src="/img/index-intro.png" srcset="/img/index-intro@2x.png 2x" alt="" role="presentation">
                <div class="intro__content">
                    <h1 class="u-h1 u-h1--small u-mb-20">Minter is building the&nbsp;simplest solution to receive, send and store any type of digital money. Or&nbsp;even create your own.</h1>

                    <h2 class="u-h3 u-mb-10">
                        <template v-if="$store.state.user">Thank you for registering.</template>
                        <template v-else>Sign in to be among the first users.</template>
                    </h2>
                    <div class="u-mb-10" v-if="$store.state.user">
                        <a class="intro__button button button--main" href="https://id.minter.org/share">View profile</a>
                    </div>
                    <div class="u-mb-10" v-else>
                        <AuthButtonGoogle class="intro__button" invitation="future" :idHost="$options.ID_HOST"/>
                    </div>
                    <p>No apps to download. No blockchain jargon to learn. <br> No special skills to apply.</p>
                    <p>
                        <nuxt-link class="link--default" to="/our-vision">Our vision</nuxt-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
