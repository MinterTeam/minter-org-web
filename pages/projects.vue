<script>
    import getTitle from '~/assets/get-title.js';

    export default {
        fetch() {
            this.$store.commit('SET_SECTION_NAME', 'Projects');
        },
        beforeRouteLeave (to, from, next) {
            this.$store.commit('SET_SECTION_NAME', '');
            next();
        },
        head() {
            const title = getTitle('Projects');
            const description = 'List of community-built projects that are either powered by the Minter blockchain or using its capabilities';

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
    <div class="u-section u-container">
        <div class="projects__container">
            <p class="projects__lead">On this page, you can find a list of community-built projects that are either powered by the Minter blockchain or using its capabilities.</p>

            <!-- INFRASTRUCTURE -->
            <h1 class="u-h1 u-h1--large u-mb-10">Infrastructure</h1>
            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://minterscan.net" target="_blank" rel="noopener">Minterscan</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/404">
                <img class="projects__cover" src="/img/projects/minterscan@640w.png" alt="" role="presentation"
                     srcset="/img/projects/minterscan@640w.png 640w,
                        /img/projects/minterscan@686w.png 750w,
                        /img/projects/minterscan@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <p class="u-mb-20">A modern Minter network explorer, which offers a wider range of intuitive and relevant tools compared to the official explorer: profile icons, validator rankings, purpose-specific tools, and more.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://minterscan.net">minterscan.net</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Coin</div>
                    <div><a class="link--default" href="https://chainik.io/coin/MSCAN">chainik.io/coin/MSCAN</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/minterscan">t.me/minterscan</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/minter_zen">t.me/minter_zen</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">Explorer</h3>
            <p>The blockchain explorer allows you to view all information about any block, transaction, or address on the Minter network. Aside from standard functionality, Minterscan offers a number of additional useful services.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Profiles</h3>
            <p>Address <a class="link--default" href="https://minterscan.net/profiles" target="_blank" rel="noopener">profiles</a> allow any person or project to set their avatar, name, and description, as well as undergo the verification process to prove ownership over a certain address.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Validator Ranking</h3>
            <p>Validator <a class="link--default" href="https://minterscan.net/validators" target="_blank" rel="noopener">ranking</a> shows the list of active validators that can be ordered by various filters—for example, stake size or voting power.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Proposal Voting</h3>
            <p><a class="link--default" href="https://minterscan.net/proposals" target="_blank" rel="noopener">Proposals</a> are ideas put forward by the community or core dev team, aimed to improve the blockchain or its individual components. This tool is mostly used for voting on major Minter network upgrades. Validators send a transaction expressing their support for either of two options, namely ACCEPT or REJECT, in the payload. For an upgrade to be accepted and proceeded with, a two-thirds majority is required.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Exchanging</h3>
            <p>Exchange <a class="link--default" href="https://minterscan.net/exchanges/" target="_blank" rel="noopener">monitoring</a> aggregates the best offers to buy or sell BIP across numerous platforms.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Other Services</h3>
            <ul class="list-simple">
                <li><a class="link--default" href="https://minterscan.net/calc" target="_blank" rel="noopener">Calculators</a>: estimate the price of a coin or potential delegation rewards</li>
                <li><a class="link--default" href="https://minterscan.net/faq/multisend" target="_blank" rel="noopener">Multi-sends</a>: make multi-send transactions using a utility or an on-line version</li>
            </ul>


            <hr class="hr--divider hr--divider-large">


            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://paymnt.io" target="_blank" rel="noopener">PayMnt</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/372">
                <img class="projects__cover" src="/img/projects/paymnt@640w.jpg" alt="" role="presentation"
                     srcset="/img/projects/paymnt@640w.jpg 640w,
                        /img/projects/paymnt@686w.jpg 750w,
                        /img/projects/paymnt@1280w.jpg 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>
            <p class="u-mb-20">Want to start accepting payments on your website with coins of the Minter network? Use ready-made PayMnt modules that do not require further development. You can accept payments from both natural and legal persons.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://paymnt.io">paymnt.io</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">GitHub</div>
                    <div><a class="link--default" href="https://github.com/ValidatorCenter">github.com/ValidatorCenter</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/minterscan">t.me/paymnt</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/minter_zen">t.me/ValidatorCenterChat</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">B2B</h3>
            <p>Enables you to accept payments from legal entities on your website. The customer confirms payment in one click, while you get an instant notification.</p>
            <p>The payment from an organization is no different from that of a regular individual: it is processed on the blockchain, uninterrupted. Once completed, you are notified that you can ship now. The customer spends less time and gets what they ordered straight away, meaning higher conversion rates in sight. As for you, costs associated with warehousing and payment processing will reduce.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Self-Employed</h3>
            <p>PayMnt’s solution for natural persons. Make invoices for the work performed or goods supplied, receive payments to a single blockchain address, and keep track of them.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Ready-Made Modules</h3>
            <p>You don’t need to develop anything from scratch, simply install the module and fill in a couple of fields. The service’s modules are available for most of the popular CMSes, SaaSes, CRMs, and frameworks. In case there is no module for your platform, reach out to the support team.</p>
            <ul class="list-simple">
                <li><a href="https://paymnt.io/mdl/joomla-joomshopping.zip" target="_blank" rel="noopener">Joomla - JoomShopping</a></li>
                <li><a href="https://paymnt.io/mdl/opencart.zip" target="_blank" rel="noopener">OpenCart</a></li>
                <li><a href="https://paymnt.io/mdl/prestashop.zip" target="_blank" rel="noopener">PrestaShop</a></li>
                <li><a href="https://paymnt.io/mdl/wordpress-woocommerce.zip" target="_blank" rel="noopener">Wordpress - WooCommerce</a></li>
                <li><a href="https://paymnt.io/mdl/drupal-commerce.zip" target="_blank" rel="noopener">Drupal - Commerce</a></li>
            </ul>

            <h3 class="u-h3 u-mb-05 u-mt-20">API</h3>
            <p>The service provides an easy-to-understand and logical REST API, there are SDKs for the most widely used programming languages, libraries with easily deployed payment forms for websites & mobile apps, and thorough documentation.</p>


            <hr class="hr--divider hr--divider-large">


            <!-- GAMES -->
            <h1 class="u-h1 u-h1--large u-mb-10">Games</h1>
            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://timeloop.games" target="_blank" rel="noopener">TimeLoop</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/372">
                <img class="projects__cover" src="/img/projects/timeloop@640w.jpg" alt="" role="presentation"
                     srcset="/img/projects/timeloop@640w.jpg 640w,
                        /img/projects/timeloop@686w.jpg 750w,
                        /img/projects/timeloop@1280w.jpg 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <p class="u-mb-20">The Time Loop arcade is one of the most popular Minter-powered games. You control a spaceship equipped with guns, and the task is to score as many points as possible in one flight.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://timeloop.games">timeloop.games</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Coin</div>
                    <div><a class="link--default" href="https://chainik.io/coin/TIME">chainik.io/coin/TIME</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/timeloopnews">t.me/timeloopnews</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/joinchat/AAI0FlFIj7OECibAuLhHpA">t.me/joinchat/AAI0FlFIj7OECibAuLhHpA</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram bot</div>
                    <div><a class="link--default" href="https://t.me/timeloopminterbot">t.me/timeloopminterbot</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">About</h3>
            <p>First off, Time Loop is a game of time. You have a spaceship with a machine gun and rockets and return to the same point in time over and over again. Just like in the Back to the Future movie, you can observe what you did in the past and influence events to change the future.</p>
            <p>You compete for points with other players who have also fallen into the loop. You can earn points by destroying their ships and collecting gold coins. A situation where you need to take out an enemy ship before it takes out your ship from the past is very common in this game.</p>
            <p>The entire game is built around the Minter-based TIME coin. It is spent when you travel in time, that is, do the flights. And it is awarded to the winner of each match.</p>
            <p>The economy depends on the blockchain entirely. The movements of coins between players after each game occur as real transactions on the Minter blockchain, between real wallets. But they are so quick and cheap that for players, the process is invisible. Everything works as fast as in regular games of the pre-blockchain era.</p>


            <hr class="hr--divider hr--divider-large">


            <!-- SEND -->
            <h1 class="u-h1 u-h1--large u-mb-10">Send and spend</h1>
            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://yyy.cash" target="_blank" rel="noopener">YYY.cash</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:400/403; width: 400px;">
                <img class="projects__cover" src="/img/projects/yyy.png" srcset="/img/projects/yyy@2x.png 2x" alt="" role="presentation" width="400" height="403">
            </figure>
            <p class="u-mb-20">This eye-catching and multi-functional service allows you to not only transfer coins through one-time wallets but also customize them. Insert your logos, animations, and background. The service’s distinguishing feature is the ability to push e-mail newsletters.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://yyy.cash">yyy.cash</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">GitHub</div>
                    <div><a class="link--default" href="https://github.com/eternalflow/push-money">github.com/eternalflow/push-money</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/yyycash">t.me/yyycash</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/yyychat">t.me/yyychat</a></div>
                </div>
            </div>

            <p class="u-mt-20">A fast, one-off push wallet with great usability. It takes only 13 clicks and 30 seconds (including all confirmations and choice of the recipient) from the moment of creating a push to actually sharing it.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Opportunities</h3>
            <ul class="list-simple">
                <li>Single-use push wallet (one recipient)</li>
                <li>Multi-push (multiple recipients, via a Google spreadsheet)</li>
                <li>Deep link deposits</li>
                <li>Extensive customization options</li>
            </ul>
            <p>You can make a branded push by adjusting parameters for a particular recipient. Once receieved, the recepient will be able to spend the coins on goods and services of their choice or use them to make in-game deposits to Time Loop, Galaxy Online, and others.</p>

            <figure class="u-aspect-ratio u-mt-20 u-mb-20" style="--aspect-ratio:640/470;">
                <img class="projects__collage-item projects__cover" src="/img/projects/yyy-2.png" srcset="/img/projects/yyy-2@2x.png 2x" alt="" role="presentation" style="--collage-width:62.5%">
                <img class="projects__collage-item projects__cover" src="/img/projects/yyy-3.png" srcset="/img/projects/yyy-3@2x.png 2x" alt="" role="presentation" style="--collage-width:62.5%">
            </figure>

            <p>YYY is critically acclaimed for its speed ​​and user-friendliness:</p>
            <figure class="u-aspect-ratio u-mt-10" style="--aspect-ratio:640/360;">
                <iframe width="640" height="360" src="https://www.youtube.com/embed/unWc4-D82wQ?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>

        </div>
    </div>
</template>
