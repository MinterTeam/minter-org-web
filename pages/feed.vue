<script>
    import {getProductCard} from '~/api';
    import FeedSubscribeForm from '~/components/FeedSubscribeForm';
    import FeedCard from '~/components/FeedCard';

    export default {
        components: {
            FeedSubscribeForm,
            FeedCard,
        },
        asyncData() {
            return Promise.all([
                    Promise.all([getProductCard(), getProductCard(), getProductCard(), getProductCard()]),
                    Promise.all([getProductCard(), getProductCard(), getProductCard()]),
                    Promise.all([getProductCard(), getProductCard(), getProductCard()]),
                ])
                .then(([featuredList, topRaiserList, freshPlayerList]) => {
                    return {
                        featuredList,
                        topRaiserList,
                        freshPlayerList,
                    }
                })
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
                featuredList: [],
            };
        },
        computed: {
            featuredMain() {
                return this.featuredList[0];
            },
            featuredOtherList() {
                return this.featuredList.slice(1);
            }
        }


    };
</script>

<template>
    <main>
        <section class="u-section u-section--gray">
            <div class="u-container">
                <h1 class="u-h1 feed__title">Featured</h1>

                <div class="u-grid u-grid--small u-grid--vertical-margin">
                    <div class="u-cell feed__featured-main u-cell--medium--1-2">
                        <FeedCard :card="featuredMain" layout="large"/>
                    </div>
                    <div class="u-cell feed__featured-other u-cell--medium--1-2">
                        <FeedCard :card="featuredItem" layout="horizontal" v-for="featuredItem in featuredOtherList" :key="featuredItem.name"/>
                        <div class="feed__featured-more">
                            <a class="link--main link--hover" href="#">View more cards</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <hr class="hr--section-divider">

        <section class="u-section">
            <div class="u-container">
                <div class="feed__section-header">
                    <h2 class="u-h1">Top Raisers</h2>
                    <a class="feed__section-more link--main link--hover u-hidden-small-down" href="#">View more</a>
                </div>
                <div class="u-grid u-grid--small u-grid--vertical-margin">
                    <div class="u-cell u-cell--medium--1-3" v-for="cardItem in topRaiserList" :key="cardItem.name">
                        <FeedCard :card="cardItem"/>
                    </div>
                </div>
                <div class="feed__featured-more u-hidden-small-up">
                    <a class="link--main link--hover" href="#">View more</a>
                </div>
            </div>
        </section>

        <section class="u-section feed__subscribe">
            <div class="u-container">
                <div class="u-grid u-grid--vertical-margin">
                    <div class="u-cell u-cell--large--1-2 feed__subscribe-title">Subscribe to our hand picked selections of&nbsp;new and&nbsp;noteworthy&nbsp;cards!</div>
                    <div class="u-cell u-cell--large--1-2">
                        <FeedSubscribeForm/>
                    </div>
                </div>
            </div>
        </section>

        <section class="u-section">
            <div class="u-container">
                <div class="feed__section-header">
                    <h2 class="u-h1">Fresh Players</h2>
                    <a class="feed__section-more link--main link--hover u-hidden-small-down" href="#">View more</a>
                </div>
                <div class="u-grid u-grid--small u-grid--vertical-margin">
                    <div class="u-cell u-cell--medium--1-3" v-for="cardItem in freshPlayerList" :key="cardItem.name">
                        <FeedCard :card="cardItem"/>
                    </div>
                </div>
                <div class="feed__featured-more u-hidden-small-up">
                    <a class="link--main link--hover" href="#">View more</a>
                </div>
            </div>
        </section>


    </main>
</template>
