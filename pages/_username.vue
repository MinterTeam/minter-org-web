<script>
    import {getUserByUsername} from '~/api/id.js';
    import checkEmpty from '~/assets/v-check-empty.js';
    import getTitle from '~/assets/get-title.js';
    import {getErrorData} from '~/assets/server-error.js';


    export default {
        components: {
        },
        directives: {
            checkEmpty,
        },
        head() {
            const title = getTitle('Profile');
            return {
                title: title,
                meta: [
                    { hid: 'og-title', name: 'og:title', content: title },
                ],

            };
        },
        fetch() {
            return getUserByUsername(this.$route.params.username)
                .then((user) => {
                    this.user = {
                        ...user,
                        //@TODO use proper cachebust
                        picture: user.picture + '?v=' + Math.random(),
                    };
                })
                .catch((error) => {
                    let errorData = getErrorData(error);
                    return this.$nuxt.error({
                        ...errorData,
                        message: errorData.status === 404 ? 'User not found' : errorData.message,
                    });
                })
        },
        data() {
            return {
                user: null,
            }
        },
        computed: {
            userPhone() {
                if (!this.user?.contacts?.phone) {
                    return '';
                }

                return this.user.contacts.phone.replace(/(\d+)(\d\d\d)(\d\d\d)(\d\d\d\d)$/, '+$1 $2-$3-$4')
            }
        },
        methods: {

        },
    }
</script>

<template>
    <div class="u-container u-container--small">
        <div class="u-section card--section-with-image" v-if="user">
            <div class="card u-text-center">
                <div class="card__content card__content--pop">
                    <div class="card__avatar card__avatar--pop" :style="{backgroundImage: `url('${user.picture}&alias=x2')`}"></div>
                    <h1 class="u-h2 u-mt-05">
                        {{ user.name }}
                    </h1>
                    <p class="u-fw-600" v-if="user.about">{{ user.about }}</p>

                    <div class="u-fw-700 u-h3 u-mt-15">Rank #{{ user.ratingPosition }}</div>
                    <div class="u-fw-700 u-text-muted u-mb-15">of {{ user.ratingTotal }} people</div>

                    <div>
                        <div class="u-mb-05" v-if="user.website && user.website !== 'https://'">
                            <a :href="user.website" class="link--default-green" target="_blank" rel="noopener">{{ user.website }}</a>
                        </div>
                        <div class="u-mb-05" v-if="user.contacts.publicEmail">
                            <a :href="'mailto:' + user.contacts.publicEmail" class="link--default-green" target="_blank" rel="noopener">{{ user.contacts.publicEmail }}</a>
                        </div>
                        <div class="u-mb-05" v-if="user.contacts.phone">
                            <a :href="'tel:+' + user.contacts.phone" class="u-fw-600" target="_blank" rel="noopener">{{ userPhone }}</a>
                        </div>
                    </div>

                    <div class="social-list card__social-list card__social-list--center">
                        <a v-if="user.contacts.socialTelegram" :href="'tg://resolve?domain=' + user.contacts.socialTelegram" class="social-icon"><img src="/img/icon-social-tg.svg" alt="Telegram"></a>
                        <a v-if="user.contacts.socialTwitter" :href="'https://twitter.com/' + user.contacts.socialTwitter" class="social-icon"><img src="/img/icon-social-tw.svg" alt="Twitter"></a>
                        <a v-if="user.contacts.socialFacebook" :href="user.contacts.socialFacebook" class="social-icon"><img src="/img/icon-social-fb.svg" alt="Facebook"></a>
                        <a v-if="user.contacts.socialInstagram" :href="'https://instagram.com/' + user.contacts.socialInstagram" class="social-icon"><img src="/img/icon-social-ig.svg" alt="Instagram"></a>
                        <a v-if="user.contacts.socialYoutube" :href="user.contacts.socialYoutube" class="social-icon"><img src="/img/icon-social-yt.svg" alt="YouTube"></a>
                        <a v-if="user.contacts.socialMedium" :href="user.contacts.socialMedium" class="social-icon"><img src="/img/icon-social-mm.svg" alt="Medium"></a>


                    </div>
                </div>
                <div class="card__content">
                    <div class="u-h--uppercase u-mb-10">Minter wallets</div>

                    <div class="card__address" v-for="minterItem in user.contacts.minter">
                        <div class="card__address-icon"></div>
                        <div class="card__address-content">
                            <div class="card__address-name ">{{ minterItem.name }}</div>
                            <div class="card__address-value">{{ minterItem.value }}</div>
                        </div>
                    </div>
                </div>
                <div class="card__content">
                    <a class="button button--ghost-green" :href="'https://id.minter.org/invite/' + user.invitation">
                        Do you want a page like that?
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
