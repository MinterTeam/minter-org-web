<script>
    import checkEmpty from '~/assets/v-check-empty.js';
    import getTitle from '~/assets/get-title.js';





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
        data() {
            return {
                user: this.$store.state.user,
            }
        },
        computed: {
            userPhone() {
                if (!this.user.contacts?.phone) {
                    return '';
                }

                return this.user.contacts?.phone.replace(/(\d+)(\d\d\d)(\d\d\d)(\d\d\d\d)$/, '+$1 $2-$3-$4')
            }
        },
        methods: {

        },
    }
</script>

<template>
    <div class="u-container u-container--small">
        <div class="u-section card--section-with-image">
            <div class="card u-text-center">
                <div class="card__content card__content--pop">
                    <div class="card__avatar card__avatar--pop" :style="{backgroundImage: `url('${user.picture}&alias=x2')`}"></div>
                    <h1 class="u-h2 u-mt-05">
                        {{ user.name }}
                    </h1>
                    <p v-if="user.about">{{ user.about }}</p>

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
                            <a :href="'tel:+' + user.contacts.phone" class="u-fw-600" target="_blank" rel="noopener">{{ user.contacts.phone }}</a>
                        </div>
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
