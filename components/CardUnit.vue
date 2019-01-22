<script>
    import faker from 'faker';
    import {USERNAME_MAX_LENGTH} from '~/assets/variables';
    import CardUnitHeader from '~/components/CardUnitHeader';
    import CardAuthForm from '~/components/CardAuthForm';

    export default {
        components: {
            CardUnitHeader,
            CardAuthForm,
        },
        props: {
            /** @type Card */
            card: {
                type: Object,
                requireD: true,
            },
        },
        data() {
            return {
                user: {
                    avatar: faker.internet.avatar(),
                    username: faker.internet.userName().substr(0, USERNAME_MAX_LENGTH),
                },
                isCardAuth: false,
            }
        },
        methods: {
            prepareHtml(text) {
                return text
                    .replace(/(?:\r\n|\r|\n)/g, '<br>')
                    .replace(/(?:(https?:\/\/[^\s\n\r<]+))/g, '<a class="link--default" href="$1" target="_blank" rel="nofollow noopener">$1</a>');
            },
            clickBuy() {
                this.isCardAuth = true;
            },
            clickBack() {
                this.isCardAuth = false;
            }
        }
    }
</script>

<template>
    <div class="card card-wrap">
        <CardUnitHeader :card="card"/>

        <div class="card__content" v-if="!isCardAuth">
            <div class="u-grid u-grid--medium">

                <!-- content -->
                <div class="u-cell u-cell--medium--2-3">
                    <h2 class="card__content-title u-h2">{{ card.content.title }}</h2>
                    <p>{{ card.content.desc1 }}</p>
                    <img class="card__content-media" src="/img/tmp-card-gallery.png" alt="" role="presentation">
                    <h2 class="card__content-title u-h2">{{ card.content.title2 }}</h2>
                    <p>{{ card.content.desc2 }}</p>
                </div>

                <!-- aside -->
                <div class="card__unit-aside-cell u-cell u-cell--medium--1-3">
                    <div class="card__price">
                        <div class="card__price-title">Price</div>
                        <div class="card__price-value">Pay What You&nbsp;Want</div>
                    </div>
                    <button class="button button--green button--full" @click="clickBuy">Buy</button>
                    <hr class="hr--divider u-hidden-medium-down">
                    <div class="card__aside-auth">
                        <div class="card__aside-auth-logged">
                            <div class="card__aside-auth-logged-caption">You are logged&nbsp;in&nbsp;as</div>
                            <button class="card__aside-auth-logout link link--underline u-semantic-button">Not me</button>
                        </div>
                        <div class="card__user">
                            <div class="card__user-avatar" :style="{'background-image': `url(${user.avatar})`}"></div>
                            <div class="card__user-name">{{ user.username }}</div>
                        </div>
                    </div>
                    <hr class="hr--divider u-hidden-medium-up">
                </div>
            </div>
        </div>

        <div class="card__content card__content--section" v-if="isCardAuth">
            <button class="card__back link--hover u-semantic-button" @click="clickBack">
                <img class="card__back-icon" src="/img/icon-back.svg" alt="" role="presentation">
                <span>Return to Description</span>
            </button>
            <h2 class="card__content-title u-h2">Minter Account</h2>
            <p class="card__auth-description">Log in to your Minter account to keep track of your purchases.</p>
            <CardAuthForm/>

        </div>
        <hr class="hr--section-divider">
        <div class="card__content card__content--section" v-if="isCardAuth">
            <h2 class="card__content-title u-h2">Guest Checkout</h2>
            <div class="u-grid u-grid--medium u-grid--vertical-margin">
                <div class="u-cell u-cell--large--2-3">
                    <p class="card__warning">If you wish to make a&nbsp;purchase as a&nbsp;guest please make sure to&nbsp;save  this link in&nbsp;order to&nbsp;access your download link after&nbsp;checkout. </p>
                </div>
                <div class="u-cell u-cell--medium--2-3">
                    <div class="u-h u-h2">minter.org/checkout/1393dkae3/31493</div>
                    <div class="card__sub-link-list">
                        <button class="card__sub-link link--default u-semantic-button" href="">Send to E-mail</button>
                        <button class="card__sub-link link--default u-semantic-button" href="">Add to Bookmarks</button>
                    </div>
                </div>
                <div class="u-cell u-cell--medium--1-3">
                    <a class="button button--green button--full" href="/checkout/asd" @click="">Checkout As&nbsp;A&nbsp;Guest</a>
                </div>
            </div>

        </div>
    </div>
</template>

