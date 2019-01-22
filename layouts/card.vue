<script>
    // import Language from '~/layouts/_language';

    let headerMenu;
    export default {
        components: {
            // Language,
        },
        head: {
            bodyAttrs: {
                class: 'layout--card'
            }
        },
        data() {
            return {
                // isTestnetNoticeActive: false, // don't init value here because of https://github.com/nuxt/nuxt.js/issues/1552,
            };
        },
        computed: {

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
        <header class="header header--card" data-header>
            <div class="header__container header__container--card u-container u-container--large" data-header-container>
                <a class="header__logo" href="#network" data-header-logo data-section-link="network">
                    <!-- размеры у лого заданы чтобы сразу правильно расчиталось в js -->
                    <img class="header__logo-image" src="/img/minter-logo-circle.svg" alt="Minter" width="36" height="36">
                </a>

                <div class="header__controls">
                    <!--<Language class="header__control-language"/>-->
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

