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

            <h3 class="u-h3 u-mb-05 u-mt-20">Validator ranking</h3>
            <p>Validator <a class="link--default" href="https://minterscan.net/validators" target="_blank" rel="noopener">ranking</a> shows the list of active validators that can be ordered by various filters—for example, stake size or voting power.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Proposal voting</h3>
            <p><a class="link--default" href="https://minterscan.net/proposals" target="_blank" rel="noopener">Proposals</a> are ideas put forward by the community or core dev team, aimed to improve the blockchain or its individual components. This tool is mostly used for voting on major Minter network upgrades. Validators send a transaction expressing their support for either of two options, namely ACCEPT or REJECT, in the payload. For an upgrade to be accepted and proceeded with, a two-thirds majority is required.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Exchanging</h3>
            <p>Exchange <a class="link--default" href="https://minterscan.net/exchanges/" target="_blank" rel="noopener">monitoring</a> aggregates the best offers to buy or sell BIP across numerous platforms.</p>

            <h3 class="u-h3 u-mb-05 u-mt-20">Other services</h3>
            <ul class="list-simple">
                <li><a class="link--default" href="https://minterscan.net/calc" target="_blank" rel="noopener">Calculators</a>: estimate the price of a coin or potential delegation rewards</li>
                <li><a class="link--default" href="https://minterscan.net/faq/multisend" target="_blank" rel="noopener">Multi-sends</a>: make multi-send transactions using a utility or an on-line version</li>
            </ul>


            <hr class="hr--divider hr--divider-large">


            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://chainik.io" target="_blank" rel="noopener">Chainik</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/441">
                <img class="projects__cover" src="/img/projects/chainik@640w.png" alt="" role="presentation"
                     srcset="/img/projects/chainik@640w.png 640w,
                        /img/projects/chainik@686w.png 750w,
                        /img/projects/chainik@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <p class="u-mb-20">CoinMarketCap for Minter. Coin ranking, all info on tokens and their transactions you could possibly imagine, list of network addresses ordered by their total balance or the amount of funds in delegation, a lot of useful datasets and statistics.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://chainik.io">chainik.io</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/chainik_io">t.me/chainik_io</a></div>
                </div>
                <div class="u-cell">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/joinchat/C8wVAE2zAtfJOQBqgbfWBA">t.me/joinchat/C8wVAE2zAtfJOQBqgbfWBA</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">Coins</h3>
            <p>The coin explorer allows you to view full information about every token issued on the network. The homepage provides a list of coins ranked by market cap along with the essential data:</p>
            <ul class="list-simple">
                <li>Coin name and icon</li>
                <li>Constant reserve ratio</li>
                <li>Coin price (in BIP)</li>
                <li>24-hour price change</li>
                <li>24-hour trading volume (coin conversions Minter-wise)</li>
                <li>Number of conversions in the last 24 hours</li>
                <li>Current reserve (in BIP)</li>
                <li>Share of delegated coins in total supply</li>
                <li>Creator address and creation date</li>
                <li>7-day price mini-chart</li>
            </ul>
            <p>The coin page contains all necessary information, including creation parameters, current indicators, transactions, and different holder and trader rankings. A TradingView-based price chart will allow you to track the coin’s performance down to the moment of its issuance.</p>

            <figure class="u-aspect-ratio u-mt-20 u-mb-20" style="--aspect-ratio:640/500;">
                <img class="projects__collage-item projects__cover" src="/img/projects/chainik-2.png" srcset="/img/projects/chainik-2@2x.png 2x" alt="" role="presentation" style="--collage-width:75%">
                <img class="projects__collage-item projects__cover" src="/img/projects/chainik-3.png" srcset="/img/projects/chainik-3@2x.png 2x" alt="" role="presentation" style="--collage-width:75%">
            </figure>

            <h3 class="u-h3 u-mb-05 u-mt-20">Rich List</h3>
            <p>The <a class="link--default" href="https://chainik.io/richlist" target="_blank" rel="noopener">Rich list</a> ranks all network addresses by their total balance. With this tool, you can view the worth of all coins an address holds, the amount it has delegated, and how it measures up against others. You can use the search bar at the top to look for a specific address. The Tag column reveals the address’ plans for Minter’s year two.</p>


            <hr class="hr--divider hr--divider-large">


            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://funfasy.dev" target="_blank" rel="noopener">FunFaSy</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/441">
                <img class="projects__cover" src="/img/projects/funfasy@640w.png" alt="" role="presentation"
                     srcset="/img/projects/funfasy@640w.png 640w,
                        /img/projects/funfasy@686w.png 750w,
                        /img/projects/funfasy@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <p class="u-mb-20">The FunFaSy API suite provides quick access to the Minter network via HTTPS. The&nbsp;infrastructure for your Web 3.0 application has never been easier.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://funfasy.dev">funfasy.dev</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Documentation</div>
                    <div><a class="link--default" href="https://funfasy.dev/info/docs/">funfasy.dev/info/docs</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/funfasy">t.me/funfasy</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/funfasy_dev">t.me/funfasy_dev</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">About</h3>
            <p>FunFaSy uses an advanced micro-service architecture behind its APIs. Developers can access the Minter network via HTTPS, with queries processed faster than if using other services or in-house solutions. APIs are constantly kept up-to-date, supporting all of the network upgrades and available even when those are taking place.</p>
            <ul class="list-simple">
                <li>An expert customer care team is ready to respond to all changes in the network’s operation 24/7</li>
                <li>All data transmitted is secured with 256-bit SSL encryption (HTTPS)</li>
                <li>The service is built upon a combination of Google Cloud and Hetzner infrastructures</li>
                <li>There is a free plan</li>
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
                <li><a class="link--default" href="https://paymnt.io/mdl/joomla-joomshopping.zip" target="_blank" rel="noopener">Joomla - JoomShopping</a></li>
                <li><a class="link--default" href="https://paymnt.io/mdl/opencart.zip" target="_blank" rel="noopener">OpenCart</a></li>
                <li><a class="link--default" href="https://paymnt.io/mdl/prestashop.zip" target="_blank" rel="noopener">PrestaShop</a></li>
                <li><a class="link--default" href="https://paymnt.io/mdl/wordpress-woocommerce.zip" target="_blank" rel="noopener">Wordpress - WooCommerce</a></li>
                <li><a class="link--default" href="https://paymnt.io/mdl/drupal-commerce.zip" target="_blank" rel="noopener">Drupal - Commerce</a></li>
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


            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://bipgame.io" target="_blank" rel="noopener">Galaxy Online</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/441">
                <img class="projects__cover" src="/img/projects/galaxy@640w.jpg" alt="" role="presentation"
                     srcset="/img/projects/galaxy@640w.jpg 640w,
                        /img/projects/galaxy@686w.jpg 750w,
                        /img/projects/galaxy@1280w.jpg 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>
            <p class="u-mb-20">Galaxy Online is a cosmic MMORTS, one the Minter network’s first. Conquer the planets, engage in space battles, and complete missions and expeditions. And don’t forget to level up!</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://bipgame.io">bipgame.io</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Guides</div>
                    <div><a class="link--default" href="https://bipgame.io/faq/index/01galaxy-planets-minerals">bipgame.io/faq/index/01galaxy-planets-minerals</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/bipgame_news">t.me/bipgame_news</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/bipgame_io">t.me/bipgame_io</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">About</h3>
            <p>The universe is nearly endless, consisting of many galaxies where players fight one another in ruthless battles for domination over planets and rich territories.</p>
            <p>Capture planets, mine minerals, upgrade skills and technologies, build a fleet, trade, attack and defend, join corporations and clans.</p>
            <p>There are several PVP modes playable without providing a private key to your wallet. No personal data of yours is needed to sign up.</p>

            <figure class="u-aspect-ratio u-mt-10" style="--aspect-ratio:640/360;">
                <iframe width="640" height="360" src="https://www.youtube.com/embed/vhuvgselML8?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>


            <hr class="hr--divider hr--divider-large">


            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://cubegame.pro" target="_blank" rel="noopener">Cube</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/496">
                <img class="projects__cover" src="/img/projects/cube@640w.jpg" alt="" role="presentation"
                     srcset="/img/projects/cube@640w.jpg 640w,
                        /img/projects/cube@686w.jpg 750w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>
            <p class="u-mb-20">Cube is a real-time multi-player strategy. Use your skills to claim enemy-controlled territories and earn CUBE coins.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://cubegame.pro">cubegame.pro</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Coin</div>
                    <div><a class="link--default" href="https://chainik.io/coin/CUBE">chainik.io/coin/CUBE</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/cubenews_ru">t.me/cubenews_ru</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/cubechat_ru">t.me/cubechat_ru</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram bot</div>
                    <div><a class="link--default" href="https://t.me/CubeMinterBot">t.me/CubeMinterBot</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">About</h3>
            <p>The game can be played by 2–8 people simultaneously. Each player has a main building called <strong>Base</strong>, the very first cube which powers everything with the energy. It is the most important cube; if you lose it, you lose the game.</p>
            <p>There are also <strong>generators</strong> scattered on the map. To capture, move your cube close to&nbsp;them.</p>
            <p>Each cube has its value, or <strong>energy</strong>. The energy of an ordinary cube is re-filled every 25&nbsp;seconds. The energy of bases and generators, every second.</p>
            <p>Energy is spent on opening new cubes and entering into the battles over bases and&nbsp;generators.</p>

            <figure class="u-aspect-ratio u-mt-10 u-mb-10" style="--aspect-ratio:640/360;">
                <iframe width="640" height="360" src="https://www.youtube.com/embed/FU0MapyxVf8?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>

            <h3 class="u-h3 u-mb-05 u-mt-20">Gaming process</h3>
            <ul class="list-simple">
                <li>WASD keys and arrows are the controls. You can move in any direction, except diagonally. You can also click anywhere on the map (energy does not move when you do so)</li>
                <li>To capture a new cube, you need 1 unit of energy; to re-capture a cube, the same 1 unit + energy of that cube</li>
                <li>Move energy around the map with your cursor</li>
                <li>The mission is to claim the bases of all players on the map</li>
                <li>The whole map is covered by the fog of war; each cube has the visibility of 1, meaning it lifts the fog 1 cell in each direction</li>
            </ul>


            <hr class="hr--divider hr--divider-large">


            <!-- SEND -->
            <h1 class="u-h1 u-h1--large u-mb-10">Send and spend</h1>
            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://minterpush.com" target="_blank" rel="noopener">MinterPush</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/441">
                <img class="projects__cover" src="/img/projects/minterpush@640w.png" alt="" role="presentation"
                     srcset="/img/projects/minterpush@640w.png 640w,
                        /img/projects/minterpush@686w.png 750w,
                        /img/projects/minterpush@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>
            <p class="u-mb-20">One of the most easy-to-use Push services. Send Minter coins to anyone in a couple of clicks, and the receiver will be able to transfer, exchange, or spend coins on a wide selection of goods and services available in the catalog.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://minterpush.com">minterpush.com</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">GitHub</div>
                    <div><a class="link--default" href="https://github.com/smoli/minterpush">github.com/smoli/minterpush</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/mintboxio">t.me/mintboxio</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Catalog</div>
                    <div><a class="link--default" href="https://minterpush.com/catalog">minterpush.com/catalog</a></div>
                </div>
            </div>

            <p class="u-mt-20">Just create a push and send a link to the receiver who can then pick one of the spending options:</p>
            <ul class="list-simple">
                <li>More than 600 mobile operators around the world whose balances you can replenish (140+ countries)</li>
                <li>Catalog of more than 12,000 games and other software items that can be used GLOBALLY, meaning no region restrictions apply</li>
                <li>No merchants with manual processing connected</li>
            </ul>
            <figure class="u-aspect-ratio u-mt-20 u-mb-20" style="--aspect-ratio:640/488;">
                <img class="projects__collage-item projects__cover" src="/img/projects/minterpush-2.png" srcset="/img/projects/minterpush-2@2x.png 2x" alt="" role="presentation" style="--collage-width:75%">
                <img class="projects__collage-item projects__cover" src="/img/projects/minterpush-3.png" srcset="/img/projects/minterpush-3@2x.png 2x" alt="" role="presentation" style="--collage-width:75%">
            </figure>


            <hr class="hr--divider hr--divider-large">


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


            <hr class="hr--divider hr--divider-large">


            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://tap.mn" target="_blank" rel="noopener">TAP.mn</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/440">
                <img class="projects__cover" src="/img/projects/tapmn@640w.png" alt="" role="presentation"
                     srcset="/img/projects/tapmn@640w.png 640w,
                        /img/projects/tapmn@686w.png 750w,
                        /img/projects/tapmn@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>
            <p class="u-mb-20">Set up your push as you need it. Multi-pushes and detailed statistics will let you analyze the results of your mailing campaigns.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://tap.mn">tap.mn</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">GitHub</div>
                    <div><a class="link--default" href="https://github.com/kanitelk/minter-push">github.com/kanitelk/minter-push</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/tapmn">t.me/tapmn</a></div>
                </div>
            </div>

            <p class="u-mt-20">On top of the standard features, there is a multi-functional, multi-push system with comprehensive statistics. To send a push, you can fill in all the receivers via a Google spreadsheet, copy all the links of one-time wallets (e.g., to later paste them into a chat), export to a file, or do it manually. Edit or remove any recipient from the list, anytime.</p>

            <figure class="u-aspect-ratio u-mb-20 u-mt-20" style="--aspect-ratio:640/206">
                <img class="projects__cover" src="/img/projects/tapmn-2@640w.png" alt="" role="presentation"
                     srcset="/img/projects/tapmn-2@640w.png 640w,
                        /img/projects/tapmn-2@686w.png 750w,
                        /img/projects/tapmn-2@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <h3 class="u-h3 u-mb-05 u-mt-20">White label</h3>
            <p>Campaigns go bundled with the pre-set offerings (sandbox editor can be found at <a class="link--default" href="https://tap.mn/preset/" target="_blank" rel="noopener">tap.mn/preset</a>). Be flexible when crafting the look of your push with over 20 parameters—colors, names, pictures (upload via the link or directly), switches, etc.</p>
            <p>There is also a .json import/export feature for re-use purposes, which makes it possible to edit or create pre-sets in a regular text editor.</p>
            <p>The API is fully <a class="link--default" href="https://app.swaggerhub.com/apis-docs/kanitelk/tap/" target="_blank" rel="noopener">documented</a>, letting anyone create single-use wallets/campaigns/presets automatically. Analytics is also available.</p>

            <figure class="u-aspect-ratio u-mt-10" style="--aspect-ratio:640/360;">
                <iframe width="640" height="360" src="https://www.youtube.com/embed/caOoQNSuVNo?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>


            <hr class="hr--divider hr--divider-large">


            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://5s.gift" target="_blank" rel="noopener">5s.gift</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/448">
                <img class="projects__cover" src="/img/projects/5sgift@640w.png" alt="" role="presentation"
                     srcset="/img/projects/5sgift@640w.png 640w,
                        /img/projects/5sgift@686w.png 750w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>
            <p class="u-mb-20">Is it your friend’s birthday, or do you simply want to thank someone? Use ready-made templates to impress the receiving party. The service also allows you to provide your audience with incentives for filling out forms or performing actions.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://5s.gift">5s.gift</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">GitHub</div>
                    <div><a class="link--default" href="https://github.com/MotherMinter/Push">github.com/MotherMinter/Push</a></div>
                </div>
            </div>

            <p class="u-mt-20">All things considered, you may also want to make your URL branded. And 5s.gift allows you to do just that. </p>
            <p>Wallet types:</p>
            <ul class="list-simple">
                <li><strong>Simple</strong> allows you to create a wallet easily accessible via a unique link</li>
                <li><strong>Feedback</strong> allows you to create a wallet that your readers will be able to access after filling out the feedback form (e.g., you did some terrific writing and need feedback to locate and eliminate errors, peer review, etc.)</li>
                <li><strong>Action</strong> allows you to create a wallet that can be accessed after the receiver completes a specific task</li>
            </ul>
            <p>You can make your pushes stand out by choosing one of the available styling templates, for example, a “Happy Birthday!” one.</p>

            <figure class="u-aspect-ratio u-mb-20 u-mt-20" style="--aspect-ratio:640/206">
                <img class="projects__cover" src="/img/projects/5sgift-2@640w.png" alt="" role="presentation"
                     srcset="/img/projects/5sgift-2@640w.png 640w,
                        /img/projects/5sgift-2@686w.png 750w,
                        /img/projects/5sgift-2@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <figure class="u-aspect-ratio u-mt-10" style="--aspect-ratio:640/360;">
                <iframe width="640" height="360" src="https://www.youtube.com/embed/FuXPiJUmyBE?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>


            <hr class="hr--divider hr--divider-large">


            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://bip.plus" target="_blank" rel="noopener">BIP+</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/504">
                <img class="projects__cover" src="/img/projects/bipplus@640w.png" alt="" role="presentation"
                     srcset="/img/projects/bipplus@640w.png 640w,
                        /img/projects/bipplus@686w.png 750w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>
            <p class="u-mb-20">Another great Push service enabling you to top up your mobile phone, pay for the Internet, transportation, travels, games, on-line shopping, and much more.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://bip.plus">bip.plus</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">GitHub</div>
                    <div><a class="link--default" href="https://github.com/BTCSecure/bip-plus-wallet">github.com/BTCSecure/bip-plus-wallet</a></div>
                </div>
            </div>

            <p class="u-mt-20">People use services from the BIP+ catalog at different frequencies. Taxi and public transportation, for example, would be daily. Mobile and Internet communications, television, games, and entertainment would be couple times a month. Airline tickets or insurance, pretty rare.</p>
            <p>With instant user experience in mind, BIP+ has focused on direct payments and balance replenishments rather than gift certificates.</p>

            <figure class="u-aspect-ratio u-mt-10" style="--aspect-ratio:640/360;">
                <iframe width="640" height="360" src="https://www.youtube.com/embed/6b4LMQVvdX4?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>


            <hr class="hr--divider hr--divider-large">


            <!-- Bots -->
            <h1 class="u-h1 u-h1--large u-mb-10">Bots</h1>
            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://t.me/MinterWalletBot" target="_blank" rel="noopener">Minter Wallet</a>
            </h2>

            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:390/352; width: 390px;">
                <img class="projects__cover" src="/img/projects/minterwalletbot.png" srcset="/img/projects/minterwalletbot@2x.png 2x" alt="" role="presentation" width="390" height="352">
            </figure>

            <p class="u-mb-20"> Third-party multi-functional Telegram bot wallet that allows you to not only receive and send coins without leaving Telegram but also manage checks, save frequently used addresses, receive notifications, and play built-in mini-games that run on the Minter blockchain.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram bot</div>
                    <div><a class="link--default" href="https://t.me/MinterWalletBot">t.me/MinterWalletBot</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">About</h3>
            <p>Create and share personalized checks and multi-checks directly within Telegram groups.</p>
            <p>Only the Telegram user you have selected can redeem a personalized check. As for multi-checks, they can be used by as many people as you have specified.</p>
            <p>With this bot, you can:</p>
            <ul class="list-simple">
                <li>Set a wallet name</li>
                <li>Enable balance change notifications</li>
                <li>Add your other wallets or set up new ones</li>
                <li>Manage an address list</li>
                <li>Play built-in mini-games powered by <a class="link--default" href="https://telegram.org/blog/folders#and-one-more-thing" target="_blank" rel="noopener">Telegram randomization</a> and Minter blockchain</li>
            </ul>
            <p>The games are all about users winning when some random conditions coincide, for example, if the number on the die is even. There are also all kinds of multipliers.</p>


            <hr class="hr--divider hr--divider-large">


            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://t.me/MinterLikeBot" target="_blank" rel="noopener">LIKE</a>
            </h2>

            <p>A minimalistic bot that rewards chat members in the LIKE coin. All you need to do is invite the bot to your group. After that, any user with a positive coin balance in the bot can like other people’s messages, thus sending LIKE coins.</p>
            <p class="u-mb-20">The chat owner gets 10% of all rewards.</p>

             <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram bot</div>
                    <div><a class="link--default" href="hhttps://t.me/MinterLikeBot">t.me/MinterLikeBot</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Coin</div>
                    <div><a class="link--default" href="https://chainik.io/coin/LIKE">chainik.io/coin/LIKE</a></div>
                </div>
            </div>


            <hr class="hr--divider hr--divider-large">


             <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://t.me/paytominter_bot" target="_blank" rel="noopener">Pay to Minter</a>
            </h2>

            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/439">
                <img class="projects__cover" src="/img/projects/paytominter@640w.png" alt="" role="presentation"
                     srcset="/img/projects/paytominter@640w.png 640w,
                        /img/projects/paytominter@686w.png 750w,
                        /img/projects/paytominter@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <p class="u-mb-20">The scope of this bot’s features lies with transferring Minter network coins to the members or airdropping them to the most active participants.</p>

             <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram bot</div>
                    <div><a class="link--default" href="https://t.me/paytominter_bot">t.me/paytominter_bot</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Documentation</div>
                    <div><a class="link--default" href="https://telegra.ph/paytointer-BOT-v092-06-15-2">telegra.ph/paytointer-BOT-v092-06-15-2</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">About</h3>
            <p>To start using the bot, add it to your group and grant corresponding rights.</p>
            <ul class="list-simple">
                <li>Send coins to a specific user</li>
                <li>Send coins to multiple users by specifying usernames</li>
                <li>Airdrop coins to the specified number of users who sent messages to the chat in the last X minutes (5 to 720)</li>
                <li>Distribute among random users</li>
                <li>Send coins to a specific wallet (Mx)</li>
            </ul>
            <p>Received coins can stay in the bot until further distribution, be withdrawn to a wallet, or spent on goods and services.</p>


            <hr class="hr--divider hr--divider-large">


             <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://t.me/MinterToolsBot" target="_blank" rel="noopener">Minter Tools</a>
            </h2>

              <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/418">
                <img class="projects__cover" src="/img/projects/mintertools@640w.png" alt="" role="presentation"
                     srcset="/img/projects/mintertools@640w.png 640w,
                        /img/projects/mintertools@686w.png 750w,
                        /img/projects/mintertools@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <p class="u-mb-20">A super useful tool if you need to get some Minter network info real quick and without leaving Telegram.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram bot</div>
                    <div><a class="link--default" href="https://t.me/MinterToolsBot">t.me/MinterToolsBot</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/MinterTools">t.me/MinterTools</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/MinterToolsChat">t.me/MinterToolsChat</a></div>
                </div>
            </div>
             <h3 class="u-h3 u-mb-05 u-mt-20">About</h3>
            <p>The bot allows you to work with your addresses and view balances, delegated funds, and capitalization. Need information about a validator? Not a problem, either: names, addresses, current and minimum stakes, number of slots taken, voting power, age—you name it.</p>
            <p>Also in the bot you can always find latest BIP rates across various exchange venues.</p>


            <hr class="hr--divider hr--divider-large">


             <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://t.me/MinterInfoBot" target="_blank" rel="noopener">Minter Info bot</a>
            </h2>

            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:450/334; width: 450px;">
                <img class="projects__cover" src="/img/projects/minterinfobot.png" srcset="/img/projects/minterinfobot@2x.png 2x" alt="" role="presentation" width="450" height="334">
            </figure>

            <p class="u-mb-20">Useful bot showing network statistics.</p>
             <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram bot</div>
                    <div><a class="link--default" href="https://t.me/MinterInfoBot">t.me/MinterInfoBot</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram group</div>
                    <div><a class="link--default" href="https://t.me/MIB_Chat">t.me/MIB_Chat</a></div>
                </div>
            </div>

             <h3 class="u-h3 u-mb-05 u-mt-20">About</h3>
            <p>This bot will help you estimate the delegator rewards and efficient re-delegation for any address, predict supply, rank the coins by their reserves, show summary information about a specific coin, and track auto-unbonds and slashes.</p>


            <hr class="hr--divider hr--divider-large">


             <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://t.me/MinterNotifyBot" target="_blank" rel="noopener">Minter Notify</a>
            </h2>

            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/475">
                <img class="projects__cover" src="/img/projects/minternotify@640w.png" alt="" role="presentation"
                     srcset="/img/projects/minternotify@640w.png 640w,
                        /img/projects/minternotify@686w.png 750w,
                        /img/projects/minternotify@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <p class="u-mb-20">An excellent demo of the Telegram + Minter synergy: this simple yet useful bot will keep you posted on all transactions made by the addresses you choose.</p>
             <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram bot</div>
                    <div><a class="link--default" href="https://t.me/MinterNotifyBot">t.me/MinterNotifyBot</a></div>
                </div>
            </div>

             <h3 class="u-h3 u-mb-05 u-mt-20">About</h3>
            <p>Add the addresses you need to the list, name them, select the types of events you are interested in, and receive alerts without leaving Telegram.</p>


            <hr class="hr--divider hr--divider-large">


            <!-- Others -->
            <h1 class="u-h1 u-h1--large u-mb-10">Others</h1>
            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://minteralerts.com" target="_blank" rel="noopener">Minter Alerts</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/409">
                <img class="projects__cover" src="/img/projects/minteralerts@640w.jpg" alt="" role="presentation"
                     srcset="/img/projects/minteralerts@640w.jpg 640w,
                        /img/projects/minteralerts@686w.jpg 750w,
                        /img/projects/minteralerts@1280w.jpg 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <p class="u-mb-20">This service allows streamers to quickly, simply, and securely receive donations from viewers, enjoying all of the Minter blockchain’s benefits.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://minteralerts.com">minteralerts.com</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/MinterAlerts">t.me/MinterAlerts</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">Features</h3>
            <ul class="list-simple">
                <li>Select alert sounds</li>
                <li>Customization of notifications</li>
                <li>Stats dashboard</li>
                <li>Integration with Twitch API</li>
                <li>Minter blockchain under the hood</li>
            </ul>

            <h3 class="u-h3 u-mb-05 u-mt-20">Advantages</h3>
            <ul class="list-simple">
                <li>Withdraw funds without unnecessary barriers: there are no withdrawal limits as your money is yours, period</li>
                <li>Low fees: transactions cost less than $.001</li>
                <li>Low confirmation times: only 5 sec. to send or receive a donation</li>
                <li>Coins can be easily exchanged for BTC, ETH, USDT, or any other cryptocurrency (using external exchange platforms) or spent immediately on goods and services listed across the Minter Push services</li>
            </ul>


            <hr class="hr--divider hr--divider-large">


            <h2 class="projects__title u-h2 u-mb-15">
                <a class="link--hover link--main" href="https://bipchange.org/?lang=en" target="_blank" rel="noopener">BipChange</a>
            </h2>
            <figure class="u-aspect-ratio u-mb-15" style="--aspect-ratio:640/409">
                <img class="projects__cover" src="/img/projects/bipchange@640w.png" alt="" role="presentation"
                     srcset="/img/projects/bipchange@640w.png 640w,
                        /img/projects/bipchange@686w.png 750w,
                        /img/projects/bipchange@1280w.png 1280w"
                     sizes="(min-width: 640px) 640w, 100vw"
                >
            </figure>

            <p class="u-mb-20">This exchange rate monitoring service is designed to enable you to quickly locate the best BIP buy/sell offers on the market.</p>

            <div class="u-grid u-grid--small u-grid--vertical-margin--small">
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Site</div>
                    <div><a class="link--default" href="https://bipchange.org/?lang=en">bipchange.org</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram channel</div>
                    <div><a class="link--default" href="https://t.me/Bip_Change">t.me/Bip_Change</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Telegram bot</div>
                    <div><a class="link--default" href="https://t.me/bipchange_org_bot">t.me/bipchange_org_bot</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">Support</div>
                    <div><a class="link--default" href="https://t.me/in_mint_bot">t.me/in_mint_bot</a></div>
                </div>
                <div class="u-cell u-cell--medium--1-2">
                    <div class="u-h u-h--uppercase u-mb-025">API</div>
                    <div><a class="link--default" href="https://bipchange.org/howtoapi?lang=en">bipchange.org/howtoapi</a></div>
                </div>
            </div>

            <h3 class="u-h3 u-mb-05 u-mt-20">What's the exposure?</h3>
            <ul class="list-simple">
                <li>6 cryptocurrencies</li>
                <li>9 electronic money systems</li>
                <li>15 banks</li>
                <li>17 exchange services</li>
                <li>150 currency pairs</li>
            </ul>
            <p>The daily volume chart allows you to assess the current trading situation in the market.</p>
            <p>BipChange does also have an average BIP price <a class="link--default" href="https://bipchange.org/widget?lang=en" target="_blank" rel="noopener">widget</a> that you can integrate into your own website.</p>



        </div>
    </div>
</template>
