<script>
    import Language from '~/layouts/_language';
    import Footer from '~/layouts/_footer';
    // import HeaderMenu from '~/assets/header-menu';

    let headerMenu;
    export default {
        components: {
            Language,
            Footer,
        },
        data() {
            return {
                // isTestnetNoticeActive: false, // don't init value here because of https://github.com/nuxt/nuxt.js/issues/1552,
            };
        },
        computed: {

        },
        mounted() {
            // headerMenu = new HeaderMenu();
            // ssr fallback
            // this.isTestnetNoticeActive = !window.localStorage.getItem('minter-testnet-notice-hidden');
        },
        destroyed() {
            // if (headerMenu && headerMenu.destroy) {
            //     headerMenu.destroy();
            // }
        },
        methods: {
            // testnetNoticeHide() {
            //     window.localStorage.setItem('minter-testnet-notice-hidden', 'true');
            //     this.isTestnetNoticeActive = false;
            // },
        },
    };
</script>

<template>
    <div class="main-wrap">
        <header class="header">
            <div class="header__container u-container u-container--large">
                <nuxt-link class="header__logo" to="/">
                    <!-- размеры у лого заданы чтобы сразу правильно расчиталось в js -->
                    <img class="header__logo-image" src="/img/minter-logo-circle.svg" alt="Minter" width="36" height="36">
                </nuxt-link>

                <Language class="header__language"/>

                <a class="header__wallet-button button button--ghost-main" href="https://wallet.beta.bip.to" target="_blank">
                    {{ tt('Wallet', 'common.wallet') }}
                </a>
            </div>
        </header>

        <nuxt class="main-content"/>

        <Footer/>
    </div>
</template>

