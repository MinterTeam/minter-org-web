<script>
    export default {

    }
</script>

<template>
    <div>
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

        <header class="header">
            <div class="header__container u-container u-container--large">
                <a class="header__logo" href="#network">
                    <!-- размеры у лого заданы чтобы сразу правильно расчиталось в js -->
                    <img class="header__logo-image" src="/img/minter-logo-circle.svg" alt="Minter" width="36" height="36">
                </a>

                <Language class="header__language"/>

                <a class="header__wallet-button button button--ghost-main" href="https://wallet.beta.bip.to" target="_blank">
                    {{ tt('Wallet', 'common.wallet') }}
                </a>
            </div>
        </header>
    </div>
</template>
