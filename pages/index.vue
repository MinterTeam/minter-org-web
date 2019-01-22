<script>
    import RegisterForm from '~/components/RegisterForm';

    export default {
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
            };
        },
        data() {
            return {

            };
        },


    };
</script>

<template>
    <main>
        <section class="index-intro">
            <div class="index-intro__container u-container">
                <div class="index-intro__content">
                    <img class="index-intro__logo" src="/img/minter-logo.svg" alt="Minter" width="190" height="59">
                    <h1 class="index-intro__title u-h1">{{ tt('Get paid in crypto for your digital goods and&nbsp;services', 'index.intro-title') }} </h1>

                    <RegisterForm class="u-relative"/>
                </div>

                <figure class="u-aspect-ratio index-intro__image" style="--aspect-ratio:440/455; width: 440px;">
                    <img src="/img/index-intro.png" srcset="/img/index-intro@2x.png 2x" width="440" height="455" alt="" role="presentation">
                </figure>
            </div>
        </section>



        <section class="u-section u-section--gray">
            <div class="u-container">
                <h2 class="u-h1 u-text-center">Get Started in Three Easy&nbsp;Steps</h2>

                <div class="index-steps">
                    <div class="index-steps__step">
                        <figure class="u-aspect-ratio index-steps__image" style="--aspect-ratio:166/166; width: 166px;">
                            <img src="/img/index-step-1.png" srcset="/img/index-step-1@2x.png 2x" width="166" height="166" alt="" role="presentation">
                        </figure>
                        <h3 class="index-steps__title u-h2">
                            <span class="index-steps__number">1</span>
                            Create an account
                        </h3>
                        <div class="index-steps__path-wrap-1">
                            <img class="index-steps__path-1 u-hidden-medium-down" src="/img/index-step-path-1.svg" alt="" role="presentation">
                        </div>
                    </div>
                    <div class="index-steps__step index-steps__step--2">
                        <figure class="u-aspect-ratio index-steps__image index-steps__image--2" style="--aspect-ratio:402/366; width: 402px;">
                            <img src="/img/index-step-2.png" srcset="/img/index-step-2@2x.png 2x" width="402" height="366" alt="" role="presentation">
                        </figure>
                        <h3 class="index-steps__title u-h2">
                            <span class="index-steps__number">2</span>
                            Fill in your card
                        </h3>
                        <div class="index-steps__path-wrap-2">
                            <img class="index-steps__path-2 u-hidden-medium-down" src="/img/index-step-path-2.svg" alt="" role="presentation">
                        </div>
                    </div>
                    <div class="index-steps__step">
                        <figure class="u-aspect-ratio index-steps__image" style="--aspect-ratio:169/233; width: 169px;">
                            <img src="/img/index-step-3.png" srcset="/img/index-step-3@2x.png 2x" width="169" height="233" alt="" role="presentation">
                        </figure>
                        <h3 class="index-steps__title u-h2">
                            <span class="index-steps__number">3</span>
                            <span>
                                Publish and <a class="link--green link--hover" href="#">get paid</a>
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </section>

        <section class="u-section u-text-center">
            <div class="u-container">
                <h2 class="u-h1 index-types__section-title">Three Types of&nbsp;Cards</h2>

                <div class="index-types u-grid u-grid--vertical-margin--large">
                    <div class="index-types__item u-cell u-cell--medium--1-3">
                        <img class="index-types__image" src="/img/index-type-basic.png" srcset="/img/index-type-basic@2x.png 2x" width="183" height="179" alt="" role="presentation">
                        <h3 class="index-types__title u-h2">Basic Card</h3>
                        <p class="index-types__description">Lets you receive any payment. Just like an ordinary card to card transfer but without any restrictions and special conditions.</p>
                    </div>
                    <div class="index-types__item u-cell u-cell--medium--1-3">
                        <img class="index-types__image" src="/img/index-type-donate.png" srcset="/img/index-type-donate@2x.png 2x" width="158" height="179" alt="" role="presentation">
                        <h3 class="index-types__title u-h2">Donate Card</h3>
                        <p class="index-types__description">You can set a fixed or dynamic amount for donations and set up automatic replies for your donors.</p>
                    </div>
                    <div class="index-types__item u-cell u-cell--medium--1-3">
                        <img class="index-types__image" src="/img/index-type-product.png" srcset="/img/index-type-product@2x.png 2x" width="154" height="179" alt="" role="presentation">
                        <h3 class="index-types__title u-h2">Product Card</h3>
                        <p class="index-types__description">Create product cards for your digital goods and services and we will handle the full checkout process including escrow and digital product delivery.</p>
                    </div>
                    <div class="index-types__item u-cell">
                        <h3 class="index-types__title u-h2">Whichever card you choose, <span class="u-display-ib">you will be able to:</span></h3>
                        <ul class="list-simple index-types__list-columns">
                            <li>Make transactions for less than 1¢ and&nbsp;without any service commission;</li>
                            <li>Use our special analytics tools;</li>
                            <li>Embed cards into your websites and&nbsp;social network&nbsp;pages;</li>
                            <li>Give feedback to your users.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>

        <section class="u-section u-section--gray u-text-center">
            <div class="u-container">
                <h2 class="u-h1 index-exchange__section-title">Hassle-Free Exchange</h2>
                <p>You can accept payments in different cryptocurrencies including:</p>
                <ul class="index-exchange__list no-list">
                    <li class="index-exchange__item">
                        <img class="index-exchange__item-icon" src="/img/index-exchange-dollar.png" srcset="/img/index-exchange-dollar@2x.png 2x" width="64" height="64" alt="" role="presentation">
                        <h3 class="u-h2 index-exchange__item-title">Crypto Dollars</h3>
                    </li>
                    <li class="index-exchange__item">
                        <img class="index-exchange__item-icon" src="/img/index-exchange-own.png" srcset="/img/index-exchange-own@2x.png 2x" width="64" height="64" alt="" role="presentation">
                        <h3 class="u-h2 index-exchange__item-title">Your own coins</h3>
                    </li>
                    <li class="index-exchange__item">
                        <img class="index-exchange__item-icon" src="/img/index-exchange-btc.png" srcset="/img/index-exchange-btc@2x.png 2x" width="64" height="64" alt="" role="presentation">
                        <h3 class="u-h2 index-exchange__item-title">Bitcoin</h3>
                    </li>
                    <li class="index-exchange__item-divider u-hidden-small-down"></li>
                    <li class="index-exchange__item-placeholder u-hidden-small-down"></li>
                    <li class="index-exchange__item">
                        <img class="index-exchange__item-icon" src="/img/index-exchange-eth.png" srcset="/img/index-exchange-eth@2x.png 2x" width="42" height="64" alt="" role="presentation">
                        <h3 class="u-h2 index-exchange__item-title">Ethereum</h3>
                    </li>
                    <li class="index-exchange__item">
                        <img class="index-exchange__item-icon" src="/img/index-exchange-bip.png" srcset="/img/index-exchange-bip@2x.png 2x" width="64" height="64" alt="" role="presentation">
                        <h3 class="u-h2 index-exchange__item-title">BIP</h3>
                    </li>
                    <li class="index-exchange__item-placeholder u-hidden-small-down"></li>
                </ul>

                <blockquote class="index-exchange__blockquote u-h u-h2">
                    But what’s more important you can <a class="link--default" href="#">instantly exchange</a> all received funds and even <a class="link--default" href="">convert them to fiat</a> money!
                </blockquote>
            </div>
        </section>

        <section class="u-section u-text-center">
            <div class="u-container">
                <h2 class="u-h1 index-payments__section-title">Accept Payments Everywhere</h2>
                <p>Minter makes it easy to accept payments in any&nbsp;environment!</p>
                <figure class="u-aspect-ratio index-payments__logos" style="--aspect-ratio:583/323; width: 583px;">
                    <img src="/img/index-payments.png" srcset="/img/index-payments@2x.png 2x" width="583" height="323" alt="" role="presentation">
                </figure>

                <p class="index-payments__lead u-h u-h1">plus many more!</p>
                <p>All you need is a&nbsp;special link, QR-code or a&nbsp;card embedded to your page or&nbsp;app!</p>
            </div>
        </section>

        <section class="index-cta u-section u-text-center">
            <div class="u-container">
                <h2 class="u-h1 index-cta__section-title">It’s Time to&nbsp;Get&nbsp;Paid!</h2>
                <a href="" class="index-cta__button button button--white">Create account</a>
            </div>
        </section>
    </main>
</template>
