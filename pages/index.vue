<script>
    import RegisterForm from '~/components/RegisterForm';

    export default {
        layout: 'guest',
        components: {
            RegisterForm,
        },
        head() {
            // const title = getTitle(this.$store.state.sectionName, this.$i18n.locale);
            const description = this.tt('Get paid in crypto for your digital goods and services', 'index.seo-description');
            // const localeSuffix = this.$i18n.locale === 'en' ? '' : '-' + this.$i18n.locale;

            return {
                // title: title,
                meta: [
                    // { hid: 'og-title', name: 'og:title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { hid: 'og-description', name: 'og:description', content: description },
                    // { hid: 'og-image', name: 'og:image', content: `/img/social-share-wallet${localeSuffix}.png` },
                ],
                script: [
                    { src: 'https://sdk.accountkit.com/en_US/sdk.js' }
                ]
            };
        },
        data() {
            return {

            };
        },


    };
</script>

<template>
    <main class="index-intro u-section main-content--index">
        <div class="index-intro__container u-container">
            <div class="index-intro__image u-aspect-ratio" style="--aspect-ratio:328/325; width:328px">
                <img src="/img/index-intro.png" srcset="/img/index-intro@2x.png 2x" alt="" width="328" height="325" role="presentation">
            </div>

            <div class="u-grid u-grid--vertical-margin--large">
                <div class="u-cell u-cell--medium--1-2 index-intro__cell-content">
                    <h1 class="index-intro__title u-h1">{{ tt('Your payment will reach any destination in&nbsp;5&nbsp;seconds', 'index.intro-title') }}</h1>
                    <p class="index-intro__link u-hidden-medium-down">
                        <a class="link--default" href="#">{{ tt('Want to learn more?', 'index.intro-link') }}</a>
                    </p>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="index-intro__panel panel panel__section">
                        <div class="index-intro__panel-title">Create your wallet</div>
                        <RegisterForm class=" u-relative"/>
                    </div>
                    <p class="index-intro__link u-hidden-medium-up">
                        <a class="link--default" href="#">{{ tt('Want to learn more?', 'index.intro-link') }}</a>
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>
