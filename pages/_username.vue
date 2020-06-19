<script>
    import Vue from 'vue';
    import {getUserByUsername} from '~/api/id.js';
    import checkEmpty from '~/assets/v-check-empty.js';
    import getTitle from '~/assets/get-title.js';
    import {getErrorData, getErrorText} from '~/assets/server-error.js';
    import {getAddressStakeList, getBalance} from '~/api/explorer.js';
    import {ID_HOST} from '~/assets/variables.js';
    /** @type {Array<{code: string, name: string}>} */
    const countryList = require('~/tmp/country-list.json');
    /** @type {Array<{code: string, name: string}>} */
    const languageList = require('~/tmp/country-language-list.json');


    export default {
        components: {
        },
        directives: {
            checkEmpty,
        },
        head() {
            if (!this.user) {
                return {}
            }
            const title = getTitle(this.user.name);
            return {
                title: title,
                meta: [
                    { hid: 'og-title', name: 'og:title', content: title },
                ],

            };
        },
        fetch() {
            return getUserByUsername(this.$route.params.username.toLowerCase())
                .then((user) => {
                    this.user = {
                        ...user,
                        //@TODO use proper cachebust
                        picture: user.picture + '?v=' + Math.random(),
                    };
                    this.getBalanceList();
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
                balanceList: {},
                stakeList: {},
            }
        },
        computed: {
            userPicture() {
                if (!this.user?.picture) {
                    return '';
                }

                const isGoogle = this.user.picture.indexOf('googleusercontent.com') >= 0;
                if (isGoogle) {
                    return this.user.picture.replace('=s96-c', '=s352-c');
                } else {
                    return this.user.picture + '&alias=big-x2';
                }
            },
            prettyPhone() {
                if (!this.user?.contacts?.phone) {
                    return '';
                }

                return this.user.contacts.phone.replace(/(\d+)(\d\d\d)(\d\d\d)(\d\d\d\d)$/, '+$1 $2-$3-$4')
            },
            prettyWebsite() {
                if (!this.user?.website) {
                    return '';
                }

                return this.user.website.replace(/^https?:\/\//, '').replace(/^ftp:\/\//, '');
            },
            minterContacts() {
                if (!this.user?.contacts?.minter) {
                    return [];
                }

                return this.user.contacts.minter.filter((item) => item.value)
            },
            country() {
                const countryItem = countryList.find((item) => item.code === this.user.country);
                return countryItem?.name;
            },
            language() {
                const languageItem = languageList.find((item) => item.code === this.user.language);
                return languageItem?.name;
            },
            idLink() {
                // check if current user is signed in
                return this.$store.state.user ? `${ID_HOST}/share` : `${ID_HOST}/invite/${this.user.invitation}`
            },
            editProfileLink() {
                // check if current user is signed in
                return `${ID_HOST}/profile/edit-public`;
            },
            userHasPublicProfile() {
                return this.$store.state.user?.isPublic && this.$store.state.user?.username;
            },
            isSelfProfile() {
                return this.$store.state.user?.username === this.user?.username;
            },
        },
        methods: {
            getBalanceList() {
                this.user.contacts.minter.forEach((item) => {
                    if (!item.value) {
                        return;
                    }
                    getBalance(item.value)
                        .then((balanceData) => {
                            Vue.set(this.balanceList, item.value, balanceData.totalBalanceSum)
                        });
                    getAddressStakeList(item.value)
                        .then((stakeData) => {
                            Vue.set(this.stakeList, item.value, stakeData.meta.additional.totalDelegatedBipValue)
                        });
                });
            },
            getBalanceEmoji(address) {
                const balance = Number(this.balanceList[address]) + Number(this.stakeList[address]);
                const million = 1000000;
                if (balance >= 100 * million) {
                    return '🐬';
                } else if (balance >= 10 * million) {
                    return '🐋';
                } else if (balance >= million) {
                    return '🦈';
                } else if (balance >= 0.1 * million) {
                    return '🐠';
                } else if (balance >= 10000) {
                    return '🦀';
                } else if (balance >= 1000) {
                    return '🐚';
                } else {
                    return '🦐';
                }
            },
        },
    }
</script>

<template>
    <div class="u-container u-container--small">
        <div class="u-section card--section u-text-center" v-if="user">
            <div class="card u-mb-20">
                <div class="card__content">
                    <div class="card__avatar" :style="{backgroundImage: `url('${userPicture}')`}"></div>
                    <h1 class="u-h2 u-mt-10">
                        {{ user.name }}
                    </h1>
                    <p class="u-fw-600" v-if="user.about">{{ user.about }}</p>

                    <div class="u-fw-700 u-h3 u-mt-15">Rank #{{ user.ratingPosition }}</div>
                    <div class="u-fw-700 u-text-muted u-mb-15">of {{ user.ratingTotal }} people</div>

                    <div>
                        <div class="u-mb-05 u-text-break" v-if="prettyWebsite">
                            <a :href="user.website" class="link--default-green" target="_blank" rel="noopener">{{ prettyWebsite }}</a>
                        </div>
                        <div class="u-mb-05 u-text-break" v-if="user.contacts.publicEmail">
                            <a :href="'mailto:' + user.contacts.publicEmail" class="link--default-green" target="_blank" rel="noopener">{{ user.contacts.publicEmail }}</a>
                        </div>
                        <div class="u-mb-05" v-if="user.contacts.phone">
                            <a :href="'tel:+' + user.contacts.phone" class="u-fw-600" target="_blank" rel="noopener">{{ prettyPhone }}</a>
                        </div>
                    </div>

                    <div class="social-list card__social-list card__social-list--center">
                        <a v-if="user.contacts.socialTelegram" :href="'tg://resolve?domain=' + user.contacts.socialTelegram" class="social-icon" target="_blank" rel="noopener">
                            <img src="/img/icon-social-tg.svg" alt="Telegram">
                        </a>
                        <a v-if="user.contacts.socialTwitter" :href="'https://twitter.com/' + user.contacts.socialTwitter" class="social-icon" target="_blank" rel="noopener">
                            <img src="/img/icon-social-tw.svg" alt="Twitter">
                        </a>
                        <a v-if="user.contacts.socialFacebook" :href="user.contacts.socialFacebook" class="social-icon" target="_blank" rel="noopener">
                            <img src="/img/icon-social-fb.svg" alt="Facebook">
                        </a>
                        <a v-if="user.contacts.socialInstagram" :href="'https://instagram.com/' + user.contacts.socialInstagram" class="social-icon" target="_blank" rel="noopener">
                            <img src="/img/icon-social-ig.svg" alt="Instagram">
                        </a>
                        <a v-if="user.contacts.socialYoutube" :href="user.contacts.socialYoutube" class="social-icon" target="_blank" rel="noopener">
                            <img src="/img/icon-social-yt.svg" alt="YouTube">
                        </a>
                        <a v-if="user.contacts.socialReddit" :href="'https://reddit.com/user/' + user.contacts.socialReddit" class="social-icon" target="_blank" rel="noopener">
                            <img src="/img/icon-social-reddit.svg" alt="Reddit">
                        </a>
                        <a v-if="user.contacts.socialMedium" :href="user.contacts.socialMedium" class="social-icon" target="_blank" rel="noopener">
                            <img src="/img/icon-social-mediumm.svg" alt="Medium">
                        </a>
                        <a v-if="user.contacts.socialGithub" :href="'https://github.com/' + user.contacts.socialGithub" class="social-icon" target="_blank" rel="noopener">
                            <img src="/img/icon-social-gh.svg" alt="Github">
                        </a>
                        <a v-if="user.contacts.socialBehance" :href="'https://behance.net/' + user.contacts.socialBehance" class="social-icon" target="_blank" rel="noopener">
                            <img src="/img/icon-social-be.svg" alt="Behance">
                        </a>
                    </div>
                </div>
                <div class="card__content" v-if="minterContacts.length">
                    <div class="u-h--uppercase u-mb-10">Minter wallets</div>

                    <div class="card__address-wrap-outer">
                        <div class="card__address-wrap-inner">
                            <div class="card__address" v-for="minterItem in minterContacts">
                                <div class="card__address-icon">{{ getBalanceEmoji(minterItem.value) }}</div>
                                <div class="card__address-content">
                                    <div class="card__address-name ">{{ minterItem.name }}</div>
                                    <a class="card__address-value link--hover" :href="'https://explorer.minter.network/address/' + minterItem.value" target="_blank" rel="noopener">{{ minterItem.value }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card__content card__content--symmetric" v-if="country || language">
                    <p class="u-fw-600">
                        {{ user.name }}
                        <span v-if="country">is from {{ country }}</span>
                        <span v-if="country && language">and</span><span v-if="language"> speaks {{ language }}</span>.
                    </p>
                </div>
            </div>
            <a class="button button--ghost" :href="editProfileLink" v-if="isSelfProfile">
                Edit public profile
            </a>
            <a class="button button--ghost-green" :href="idLink" v-else-if="!userHasPublicProfile">
                Do you want a page like that?
            </a>
        </div>
    </div>
</template>
