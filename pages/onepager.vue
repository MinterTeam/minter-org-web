<script>
    export default {
        head() {
            const title = 'One pager';
            const description = 'Minter is a Global Rewards Network for modern brands. Our mission is to become a leader in rewards protocols—connect brands and people, let them exchange new types of values.';
            // const localeSuffix = this.$i18n.locale === 'en' ? '' : '-' + this.$i18n.locale;

            return {
                title: title,
                meta: [
                    { hid: 'og-title', name: 'og:title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { hid: 'og-description', name: 'og:description', content: description },
                    // { hid: 'og-image', name: 'og:image', content: `/img/social-share-wallet${localeSuffix}.png` },
                ],
            };
        },
    }
</script>

<template>
    <div class="u-section">
        <div class="u-container u-container--small">
            <h1 class="u-h1 u-mb-10">What is Minter?</h1>
            <p>Minter is a Global Rewards Network for modern brands. Our mission is to become a leader in rewards protocols—connect brands and people, let them exchange new types of values.</p>
            <p>And since the solution is blockchain-powered, we don't need any banks or centralized agents to manage accounts neither for businesses nor for users. Think of us as a Visa for rewards but without cards and banks.</p>

            <h2 class="u-h2 u-mb-05 u-mt-20">What makes it possible?</h2>
            <p>There are 5 levels in our hierarchy that allow us to achieve the set goals.</p>
            <div class="u-mt-20 u-mb-20 u-aspect-ratio" style="--aspect-ratio:475/328; width:475px">
                <img src="/img/onepager-levels.png" srcset="/img/onepager-levels@2x.png 2x" alt="" width="475" height="328" role="presentation">
            </div>

            <h3 class="u-h3 u-mt-20 u-mb-05">Level 1. Minter Network</h3>
            <p>Designed with mass adoption requirements in mind, the Minter network has a lot of competitive advantages over other blockchains: transfers are done in seconds with the volume of tens of thousands a minute and the average commission is way <span class="u-display-ib">below 1 U.S. cent.</span></p>
            <p><nuxt-link class="link--default" to="/">Learn More</nuxt-link></p>

            <h3 class="u-h3 u-mt-20 u-mb-05">Level 2. Infrastructure</h3>
            <p>Built with very simple and robust API, the Minter blockchain can support lots of client-side apps developed with our SDK, e.g., mobile wallets, browser extensions, desktop and mobile web applications.</p>
            <p>Furthermore, community-built services like <a class="link--default" href="https://chainik.io/" target="_blank" rel="noopener">Chainik</a> explorer or API packages like <a class="link--default" href="https://funfasy.dev/" target="_blank" rel="noopener">FunFasy</a> provide all the necessary infrastructure tools for a successful integration and uninterrupted functioning of the upper level products.</p>

            <h3 class="u-h3 u-mt-20 u-mb-05">Level 3. Platforms</h3>
            <p>SaaS apps and platforms like <a class="link--default" href="https://www.pinpon.io/" target="_blank" rel="noopener">Pinpon</a> act as a bridge between raw technologies and end users. They allow companies and individuals issue their own branded rewards and set up promotional campaigns in just a few minutes. No coding skills required.</p>

            <h3 class="u-h3 u-mt-20 u-mb-05">Level 4. Brands and partners</h3>
            <p>By brands we understand global companies, local merchants, online streamers, tutors, artists, social media influencers–you name it. They reward their loyal clients and followers for engagement, while partners like <a class="link--default" href="https://minterpush.com/" target="_blank" rel="noopener">MinterPush</a> provide solutions that make those rewards valuable.</p>

            <h3 class="u-h3 u-mt-20 u-mb-05">Level 5. End users</h3>
            <p>Our end users in fact are the loyal customers, clients, followers and supporters of the aforementioned brands.</p>
            <p>Do you agree that the majority of PC-users don’t care what’s inside their computer, while surfing the Internet or playing Solitaire? That’s exactly how our users get all the benefits of the Network without even knowing about it.</p>

            <hr class="hr--divider">

            <p>To sum it all up, Minter delivers the benefits of blockchain based rewards to any person in the world through a chain of multiple solutions and partners. We truly believe that decentralized loyalty programs will replace traditional solutions and will continue to invest in becoming the world’s most advanced rewards networks.</p>




            <h2 class="u-h1 u-mt-20 u-mb-15">More information</h2>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><nuxt-link class="link--default" to="/">minter.org</nuxt-link></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Medium</div>
                    <div><a class="link--default" href="https://medium.com/@MinterTeam" target="_blank" rel="noopener">medium.com/@MinterTeam</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/MinterTeam" target="_blank" rel="noopener">t.me/MinterTeam</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/MinterNetworkGroup" target="_blank" rel="noopener">t.me/MinterNetworkGroup</a></div>
                </div>
            </div>


        </div>
    </div>
</template>
