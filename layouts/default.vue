<script>
    import Language from '~/layouts/_language';
    import HeaderMenu from '~/assets/header-menu';

    let headerMenu;
    export default {
        components: {
            Language,
        },
        data() {
            return {
                // isTestnetNoticeActive: false, // don't init value here because of https://github.com/nuxt/nuxt.js/issues/1552,
            };
        },
        computed: {

        },
        mounted() {
            headerMenu = new HeaderMenu();
            // ssr fallback
            // this.isTestnetNoticeActive = !window.localStorage.getItem('minter-testnet-notice-hidden');
        },
        destroyed() {
            if (headerMenu && headerMenu.destroy) {
                headerMenu.destroy();
            }
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
        <!--<div class="testnet-notice" v-if="isTestnetNoticeActive">
            <div class="testnet-notice__container u-container u-container&#45;&#45;large">
                <div class="testnet-notice__content">
                    <span class="testnet-notice__icon">👨🏻‍🔬</span>
                    <span class="testnet-notice__caption">You are using testnet version. <br class="u-hidden-medium-up u-hidden-mini-down"> Not&nbsp;real&nbsp;money</span>
                </div>
                <button class="testnet-notice__close u-semantic-button" @click="testnetNoticeHide">
                    <span class="testnet-notice__close-icon">Close</span>
                </button>
            </div>
        </div>-->

        <!--<header class="header">
            <div class="header__container u-container u-container&#45;&#45;large">
                &lt;!&ndash;<nuxt-link class="header__logo no-link" :to="getLocalePath('index')">

                </nuxt-link>&ndash;&gt;
                <img class="header__logo-image" src="/img/bip-logo.svg" alt="Bip" width="52" height="36">

                <div class="header__controls">
                    <a class="header__wallet-button button" href="https://wallet.beta.bip.to">
                        <img class="header__wallet-icon" src="/img/bip-coin.svg" width="30" height="30" alt="" role="presentation">
                        {{ tt('Wallet', 'common.wallet') }}
                    </a>
                    <Language class="header__control-language"/>
                </div>
            </div>
        </header>-->

        <header class="header" data-header>
            <div class="header__container u-container u-container--large" data-header-container>
                <a class="header__logo" href="#network" data-header-logo data-section-link="network">
                    <!-- размеры у лого заданы чтобы сразу правильно расчиталось в js -->
                    <img class="header__logo-image" src="/img/minter-logo-circle.svg" alt="Minter" width="36" height="36">
                </a>
                <nav class="header__menu" data-header-menu>
                    <template v-if="$route.path === '/'">
                        <nuxt-link class="header__link is-active" to="/">Get Paid</nuxt-link>
                        <nuxt-link class="header__link" to="/asd">Use Money</nuxt-link>
                    </template>
                    <template v-if="$route.path === '/feed'">
                        <nuxt-link class="header__link is-active" to="/feed">Feed</nuxt-link>
                        <nuxt-link class="header__link" to="/explore">Explore</nuxt-link>
                        <nuxt-link class="header__link" to="/trade">Trade</nuxt-link>
                    </template>
                </nav>

                <div class="header__controls">
                    <Language class="header__control-language"/>

                    <button class="header__offcanvas-button u-semantic-button" data-header-button>
                        <span class="header__offcanvas-icon-wrap">
                            <span class="header__offcanvas-icon">Menu</span>
                        </span>
                    </button>
                </div>
            </div>
        </header>



        <div class="main-content">
            <nuxt/>
        </div>

        <!--<footer class="footer">
            <div class="u-container">
                <div class="footer__content">
                    <h3 class="footer__title u-h5">{{ tt('Powered by', 'common.footer-title') }} <img class="footer__logo" src="/img/minter-logo-white.svg" alt="Minter" width="95" height="30"></h3>
                    <p>{{ tt('Bip Wallet is a mApp (Minter&nbsp;App) running on the blockchain and using only open&#x2011;source software from the official GitHub of the Minter&nbsp;Team.', 'common.footer-description') }}</p>
                    <p>{{ tt('Please contact us with any questions at', 'common.footer-contact') }} <a class="link&#45;&#45;default" href="mailto:hello@bip.to">hello@bip.to</a></p>
                </div>
            </div>
        </footer>-->
    </div>
</template>

