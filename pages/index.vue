<script>
    import prettyNum, {PRECISION_SETTING} from 'pretty-num';
    import format from 'date-fns/format/index.js';
    import {ID_HOST, WALLET_HOST} from '~/assets/variables.js';
    import {getBipPrice} from '~/api/explorer.js';
    import AuthIndexForm from '~/components/AuthIndexForm.vue';
    import AuthButtonGoogle from '~/components/AuthButtonGoogle.vue';
    import ResourceItem from '~/components/ResourceItem.vue';
    import ResourceProjectItem from '~/components/ResourceProjectItem.vue';

    export default {
        ID_HOST,
        WALLET_HOST,
        components: {
            AuthIndexForm,
            AuthButtonGoogle,
            ResourceItem,
            ResourceProjectItem,
        },
        fetch() {
            return getBipPrice()
                .then((bipPrice) => {
                    this.bipPrice = bipPrice;
                });
        },
        asyncData(ctx) {
            return ctx.$content('news').sortBy('createdAt', 'desc').limit(4).fetch()
            .then((news) => {
                return {news};
            });
        },
        fetchOnServer: false,
        // head() {
        //     const title = 'Minter Development Foundation';
        //     const description = 'We support the research and development of novel methods of value exchange for the public good.';
        //     // const localeSuffix = this.$i18n.locale === 'en' ? '' : '-' + this.$i18n.locale;
        //
        //     return {
        //         title: title,
        //         meta: [
        //             { hid: 'og-title', name: 'og:title', content: title },
        //             { hid: 'description', name: 'description', content: description },
        //             { hid: 'og-description', name: 'og:description', content: description },
        //             // { hid: 'og-image', name: 'og:image', content: `/img/social-share-wallet${localeSuffix}.png` },
        //         ],
        //     };
        // },
        data() {
            return {
                // isAuthLoading: false,
                isEmailSent: false,
                bipPrice: 0,
                news: [],
            };
        },
        methods: {
            coinPrice: (value) => prettyNum(value, {precision: 4, precisionSetting: PRECISION_SETTING.FIXED}),
            dateFormat(value) {
                return format(new Date(value), 'MMMM d, y');
            },
        },
    };
</script>

<template>
    <div class="u-section u-container">
        <h1 class="u-h1 u-h1-main u-h1--large u-mb-25">Minter Development Foundation</h1>
        <div class="intro">
            <img class="intro__image" src="/img/index-intro-wallet-2.png" srcset="/img/index-intro-wallet-2@2x.png 2x" alt="Minter" role="presentation">
            <div class="intro__content">
                <!--
                <div class="u-h u-h3 u-mb-10">
                    <template v-if="$store.state.user">Thank you for registering.</template>
                    <template v-else>Sign in to be among the first users.</template>
                </div>
-->
                <!--<div class="u-mb-10" v-if="$store.state.user">
                    <a class="intro__button button button&#45;&#45;main" href="https://id.minter.org/share">View profile</a>
                    <a class="intro__button button button--main button--full-mobile" :href="$options.WALLET_HOST">Launch wallet</a>
                </div>
                <div class="u-mb-10" v-else>
                    <AuthIndexForm @success="isEmailSent = true"/>
                    <div class="u-mt-15" v-if="!isEmailSent">
                        Or
                        <AuthButtonGoogle class="link--default u-fw-700" invitation="future"
                                          :idHost="$options.ID_HOST"
                                          :minterRedirect="$options.WALLET_HOST"
                        >
                            Sign in with Google
                        </AuthButtonGoogle>
                    </div>
                </div>-->

                <blockquote class="intro__quote u-section--top-margin--large">
                    <p>The Minter Development Foundation is a U.S.-based non-profit organization that supports the development and adoption of the Minter blockchain and its ecosystem. The MDF neither owns nor controls the network; it merely represents the interests of the stakeholders to the best of its ability.</p>
                </blockquote>
            </div>
        </div>

        <h2 class="u-h2 u-mb-20 u-mt-20" id="projects">More about Us</h2>
        <p class="u-mb-10">Ten percent of the BIP mining goes to the DAO (Decentralized Autonomous Organization) address, which is managed by the Minter Development Foundation. These funds are used to sponsor promotion, development, liquidity enhancement, legal assistance, and many other types of activity aimed to increase the network’s value in general.</p>
        <p class="u-mb-10">The Foundation’s mission is to popularize the blockchain itself and show what it can do. Unlike many other networks who do not have grant budgets, the MDF offers a unique opportunity to the most out-of-the-box ideas and experiments that would otherwise not receive funding from conventional commercial structures.</p>
        <p class="u-mb-10">To date, the Minter Development Foundation has led several major campaigns:
            <ul class="u-mt-10">
                <li>distributed the initial supply of HUB—the native digital token of the Minter Hub cross-chain bridge—among the prominent community members according to the significance of their contribution;</li>
                <li>backed the rewards accrual to those who had locked their BIP to be further converted into its mirrored version on Ethereum and Binance Smart Chain;</li>
                <li>burned 385 million BIP, or 9.3% of supply at the time, as the first in a series of tokenomics strengthening measures.</li>
            </ul>
        </p>

        <hr class="hr--divider hr--divider-large">

        <h2 class="u-h2 u-mb-20">Latest news</h2>
        <div class="u-grid u-grid--vertical-margin u-mb-25">
            <div class="u-cell u-cell--medium--1-2" v-for="item in news" :key="item.title">
                <div class="index__news-item" :class="`index__news-item--${item.category}`">
                    <h3 class="u-h3 u-mb-05"><a class="link--main link--hover" :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a></h3>
                    <p class="u-mb-05">{{ item.description }}</p>
                    <div class="u-text-muted">{{ dateFormat(item.createdAt) }}</div>
                </div>
            </div>
        </div>
        <div class="u-text-center">
            <a class="button button--ghost-main button--medium" href="https://medium.com/@MinterTeam" target="_blank" rel="noopener">More news</a>
        </div>


        <hr class="hr--divider hr--divider-large">


        <h2 class="u-h2 intro__list">One glance at our list of tools and&nbsp;projects is worth a&nbsp;thousand&nbsp;words</h2>
        <h2 class="u-h1 u-h1--large u-mb-05" id="wallets">Wallets</h2>
        <p class="u-mb-20 index__description">Use our wallets to manage BIP and other coins.</p>
        <div class="u-grid u-grid--small u-grid--vertical-margin--medium">
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceItem
                    link="https://apps.apple.com/ru/app/bip-wallet/id1457843214"
                    icon="wallet-mobile"
                    title="iOS"
                    tag="app"
                >
                    <p>User-friendly and feature-rich wallet released as an application for iOS devices.</p>
                </ResourceItem>
                <ResourceItem
                    link="https://play.google.com/store/apps/details?id=network.minter.bipwallet.mainnet"
                    icon="wallet-mobile"
                    title="Android"
                    tag="app"
                >
                    <p>User-friendly and feature-rich wallet released as an application for Android devices.</p>
                </ResourceItem>
            </div>
            <div class="u-cell u-cell--large--2-3 u-cell--medium--1-2 index__wallets-image-cell">
                <figure class="index__wallets-image-wrap u-aspect-ratio" style="--aspect-ratio:515/349; width: 515px;">
                    <img class="index__wallets-image" src="/img/index-wallets.png" srcset="/img/index-wallets@2x.png 2x" alt="" role="presentation">
                </figure>
            </div>
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceItem
                    link="https://wallet.bip.to"
                    icon="wallet-web"
                    title="Web wallet"
                    tag="web"
                >
                    <p>BIP Wallet’s basic web version. Includes all essential functionality for managing your coins: receive, send, and delegate.</p>
                </ResourceItem>
                <!--<ResourceItem
                    link="https://wallet.reef.mn"
                    icon="wallet-reef"
                    title="Reef wallet"
                    tag="web"
                >
                    <p>Third-party user wallet with multi-accounts, address book, list of validators, and data from external services.</p>-->
                    <ResourceItem
                    link="https://minterpush.com"
                    icon="send-minterpush"
                    title="Minterpush"
                    tag="web"
                >
                    <p>One of the most easy-to-use push services. Send Minter coins to anyone in a couple of clicks, and the receiver will be able to transfer, exchange, or spend coins on a wide selection of goods and services available in the catalog.</p>
                </ResourceItem>
            </div>
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceItem
                    link="https://t.me/MinterWalletBot"
                    icon="wallet-telegram"
                    title="Telegram bot"
                    tag="telegram bot"
                >
                    <p>Third-party multi-functional Telegram bot wallet that allows you to not only receive and send coins without leaving Telegram but also manage checks, save frequently used addresses, receive notifications, and play built-in mini-games that run on the Minter blockchain.</p>
                </ResourceItem>
                <ResourceItem
                    link="https://wallet.minter.org/"
                    icon="wallet-minter"
                    title="Minter Wallet"
                    tag="Web"
                >
                    <p>For businesses offering loyalty programs and customers who use them.</p>
                </ResourceItem>
            </div>
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceItem
                    link="https://en.monke.io"
                    icon="wallet-monke"
                    title="Monke"
                    tag="app"
                >
                    <p>With this third-party app, all your Minter coins are available in any application of your choice, always at your fingertips, and can be accessed in the most easy-to-understand way—from your keyboard. Available both for iOS and Android.</p>
                </ResourceItem>
                <ResourceItem
                    link="https://honee.app/"
                    icon="wallet-honee"
                    title="Honee"
                    tag="Web"
                >
                    <p>The simplest crypto wallet that helps you earn.</p>
                </ResourceItem>
            </div>
        </div>

        <hr class="hr--divider hr--divider-large">

        <h2 class="u-h1 u-h1--large u-mb-05" id="developers">Developers’ essentials</h2>
        <p class="u-mb-20 index__description">Find all the developer resources you need.</p>
        <div class="resource-columns">
            <ResourceItem
                link="https://www.minter.network"
                icon="dev-site"
                title="Site"
                tag="web"
            >
                <p>A one-stop shop for developers to access all resources available.</p>
            </ResourceItem>
            <ResourceItem
                link="https://www.minter.network/docs"
                icon="dev-docs"
                title="Docs"
                tag="web"
            >
                <p>API documentation. Blockchain specifications, instructions on starting a node, detailed descriptions of all entities (coins, transactions, checks, MultiSig addresses, etc.), fees, validators, and links to all SDKs.</p>
            </ResourceItem>
            <ResourceItem
                link="https://status.minter.network"
                icon="dev-status"
                title="Status"
                tag="web"
            >
                <p>Summarized information about the network: activity statuses, uptime, total supply, BIP stats, quantity and speed of blocks and transactions per 24 hours, validators, as well as network fees paid daily. </p>
            </ResourceItem>
            <ResourceItem
                link="https://explorer.minter.network"
                icon="dev-explorer"
                title="Explorer"
                tag="web"
            >
                <p>Explorer of transactions, blocks, and addresses. Aside from the classic functionality, here you can get information on the number of generated blocks and transactions, BIP’s market price, and daily transactions dynamics over the past 14 days.</p>
            </ResourceItem>
            <ResourceItem
                link="https://console.minter.network"
                icon="dev-console"
                title="Console"
                tag="web"
            >
                <p>This wallet has the most features: besides the standard functions of the basic wallet, you can also work with checks, create coins, launch masternodes, set up and manage MultiSig addresses, and broadcast the transactions signed off-line.</p>
            </ResourceItem>
            <ResourceItem
                link="https://github.com/MinterTeam"
                icon="dev-github"
                title="GitHub"
                tag="web"
            >
                <p>Source code of Minter team repositories on the GitHub platform. Node, wallets, multiple SDKs and APIs.</p>
            </ResourceItem>
            <ResourceItem
                link="https://funfasy.dev"
                icon="dev-funfasy"
                title="FunFaSy"
                tag="web"
            >
                <p>The FunFaSy API package provides quick access to the Minter network via HTTPS. The infrastructure for your Web 3.0 application has never been easier.</p>
            </ResourceItem>
            <ResourceItem
                link="https://chainik.io"
                icon="dev-chainik"
                title="Chainik"
                tag="web"
            >
                <p>CoinMarketCap for Minter. Coin ranking, all data on coins and their transactions you could possibly imagine, list of network addresses sorted by their total balance or delegated funds, a lot of useful samples and statistics.</p>
            </ResourceItem>
        </div>

        <hr class="hr--divider hr--divider-large">

        <!--<h2 class="u-h1 u-h1--large u-mb-05" id="projects">Community projects</h2>
        <p class="u-mb-20 index__description">Discover projects and services based on or using the Minter blockchain, developed by our community.</p>
        <div class="u-grid u-grid--small u-grid--vertical-margin--medium u-mb-20">
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceProjectItem
                    link="https://timeloop.games"
                    src="/img/resources/project-timeloop.jpg"
                    title="Time Loop"
                    tag="web, telegram bot"
                >
                    <p>The Time Loop arcade is one of the most popular Minter-powered games. You control a spaceship equipped with guns, and the task is to score as many points as possible in one flight. The player who scored the most points becomes a contender for the winner of the game. If none of their rivals score better in the next three flights, the challenger becomes the winner of the game and gets a stash full of TIME coins.</p>
                </ResourceProjectItem>
            </div>
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceProjectItem
                    link="https://t.me/paytominter_bot"
                    src="/img/resources/project-paytominter.png"
                    title="PayToMinter"
                    tag="telegram bot"
                >
                    <p>Want to encourage activity within your own Telegram community? No problem. Add this bot to your chat, hold airdrops, and like messages of the active community members. Rewards can be distributed in any coin issued on the Minter network, which the receiver can swap for a good or service via one of the Minter Push services right away.</p>
                </ResourceProjectItem>
            </div>
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceProjectItem
                    link="https://bipgame.io"
                    src="/img/resources/project-galaxy.jpg"
                    title="Galaxy Online"
                    tag="web"
                >
                    <p>Galaxy Online is a cosmic MMORTS, one the Minter network’s first. Conquer the planets, engage in space battles, and complete missions and expeditions. And don’t forget to level up!</p>
                </ResourceProjectItem>
            </div>
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceProjectItem
                    link="https://minteralerts.com"
                    src="/img/resources/project-alerts.jpg"
                    title="Minter Alerts"
                    tag="web"
                >
                    <p>A service for streamers that allows you to quickly, simply, and securely receive donations from viewers, enjoying all of the Minter blockchain’s benefits.</p>
                </ResourceProjectItem>
            </div>
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceProjectItem
                    link="https://bipchange.org/"
                    src="/img/resources/project-bipchange.png"
                    title="BipChange"
                    tag="web"
                >
                    <p>This exchange rate monitoring service is&nbsp;designed to enable you to quickly locate the best BIP buy/sale offers on the market.</p>
                </ResourceProjectItem>
            </div>
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceProjectItem
                    link="https://apps.apple.com/ru/app/rundax-wallet/id1519026967"
                    src="/img/resources/project-runduxwallet.jpg"
                    title="Rundax Wallet"
                    tag="app"
                >
                    <p>A third-party wallet with advanced security to interact with BIP in Minter blockchain from a verified App Store developer.</p>
                </ResourceProjectItem>
            </div>
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceProjectItem
                    link="https://flat.audio"
                    src="/img/resources/project-flataudio.jpg"
                    title="Flat.Audio"
                    tag="web"
                >
                    <p>An electronic music streaming service that brings together artists and listeners from all over the world and issued its own cryptocurrency on the Minter network under the name FLATCOIN.</p>
                </ResourceProjectItem>
            </div>
        </div>
        <div class="u-grid u-grid--small u-grid--vertical-margin--medium">
            <div class="u-cell u-cell--large--1-3"></div>
            <div class="u-cell u-cell--large--1-3">
                <nuxt-link class="button button--ghost-main button--full" to="/projects">More projects</nuxt-link>
            </div>
            <div class="u-cell u-cell--large--1-3"></div>
        </div>


        <hr class="hr--divider hr--divider-large">-->


        <!--<h2 class="u-h1 u-h1--large u-mb-05" id="send-and-spend">Send and spend</h2>
        <p class="u-mb-20 index__description">In just a few clicks, you can send Minter-based coins to anyone who can then spend them on numerous goods and services around the world. No need to install a wallet.</p>
        <div class="u-grid u-grid--small u-grid--vertical-margin--medium">
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceItem
                    link="https://minterpush.com"
                    icon="send-minterpush"
                    title="Minterpush"
                    tag="web"
                >
                    <p>One of the most easy-to-use push services. Send Minter coins to anyone in a couple of clicks, and the receiver will be able to transfer, exchange, or spend coins on a wide selection of goods and services available in the catalog.</p>
                </ResourceItem>
            </div>
            <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                <ResourceItem
                    link="https://tap.mn"
                    icon="send-tap"
                    title="Tap.mn"
                    tag="web"
                >
                    <p>Set up your push as you need. Multi-pushes and detailed statistics will let you analyze the results of your mailing campaigns.</p>
                </ResourceItem>
            </div>
        </div>


        <hr class="hr--divider hr--divider-large">-->


        <!--<h2 class="u-h1 u-h1--large u-mb-05" id="be-engaged">Be engaged</h2>
        <p class="u-mb-20 index__description index__contests-description">Take part in our initiatives and programs, get rewards, and join hands with us in contributing to the network’s development.</p>
        <div class="u-grid u-grid--small u-grid--vertical-margin--medium">
            <div class="u-cell u-cell--medium--1-2">
                <ResourceItem
                    link="https://pop.minter.org"
                    icon="contest-pop"
                    title="POP"
                    tag="web"
                >
                    <p>The first global campaign aimed to popularize BIP and Minter will allow creators to receive POP coins for unique educational materials. The goal is to teach every newcomer about the advantages of the Minter blockchain and its native BIP token. Depending on the quality and type of content, you may be awarded up to 100 POP coins.</p>
                </ResourceItem>
                <ResourceItem
                    link="https://t.me/MinterContestBot"
                    icon="contest-bot"
                    title="Contest bot"
                    tag="telegram bot"
                >
                    <p>Get rewarded for completing simple tasks on social networks: subscribe to channels and pages, leave your likes and comments, and bring your friends.</p>
                </ResourceItem>
            </div>
            <div class="u-cell u-cell--medium--1-2 u-relative u-hidden-medium-down">
                <img class="index__contests-image" src="/img/index-contests.png" srcset="/img/index-contests@2x.png 2x" alt="" width="371" height="391">
            </div>
        </div>


        <hr class="hr--divider hr--divider-large">-->


        <h2 class="u-h1 u-h1--large u-mb-05 u-relative" id="follow">
            Join the conversation
            <img class="index__conversation-image" src="/img/index-conversation.png" srcset="/img/index-conversation@2x.png 2x" alt="" role="presentation">
        </h2>
        <p class="u-mb-20 index__description">Follow all of our news, announcements, and content updates on social networks and instant messengers.</p>
        <div class="u-grid u-grid--small u-grid--vertical-margin--small u-grid--vertical-margin--medium--default">
            <div class="u-cell u-cell--medium--1-3 u-cell--small--1-2">
                <a class="index__social-link link--main link--hover" href="https://medium.com/@MinterTeam" target="_blank" rel="noopener">
                    <img class="index__social-icon" src="/img/icon-social-medium.svg" alt="" role="presentation" width="36" height="36">
                    <span class="index__social-caption">Medium</span>
                </a>
            </div>
            <div class="u-cell u-cell--medium--1-3 u-cell--small--1-2">
                <a class="index__social-link link--main link--hover" href="https://twitter.com/MinterTeam" target="_blank" rel="noopener">
                    <img class="index__social-icon" src="/img/icon-social-tw.svg" alt="" role="presentation" width="36" height="36">
                    <span class="index__social-caption">Twitter</span>
                </a>
            </div>
            <div class="u-cell u-cell--medium--1-3 u-cell--small--1-2">
                <a class="index__social-link link--main link--hover" href="https://www.reddit.com/r/Minter/" target="_blank" rel="noopener">
                    <img class="index__social-icon" src="/img/icon-social-reddit.svg" alt="" role="presentation" width="36" height="36">
                    <span class="index__social-caption">Reddit</span>
                </a>
            </div>
            <div class="u-cell u-cell--medium--1-3 u-cell--small--1-2">
                <a class="index__social-link link--main link--hover" href="https://www.facebook.com/MinterNetwork" target="_blank" rel="noopener">
                    <img class="index__social-icon" src="/img/icon-social-fb.svg" alt="" role="presentation" width="36" height="36">
                    <span class="index__social-caption">Facebook</span>
                </a>
            </div>
            <div class="u-cell u-cell--medium--1-3 u-cell--small--1-2">
                <a class="index__social-link link--main link--hover" href="https://t.me/MinterNetworkGroup" target="_blank" rel="noopener">
                    <img class="index__social-icon" src="/img/icon-social-tg.svg" alt="" role="presentation" width="36" height="36">
                    <span class="index__social-caption">Telegram group</span>
                </a>
            </div>
            <div class="u-cell u-cell--medium--1-3 u-cell--small--1-2">
                <a class="index__social-link link--main link--hover" href="https://t.me/MinterTeam" target="_blank" rel="noopener">
                    <img class="index__social-icon" src="/img/icon-social-tg.svg" alt="" role="presentation" width="36" height="36">
                    <span class="index__social-caption">Telegram channel</span>
                </a>
            </div>
            <div class="u-cell u-cell--medium--1-3 u-cell--small--1-2">
                <a class="index__social-link link--main link--hover" href="https://github.com/MinterTeam" target="_blank" rel="noopener">
                    <img class="index__social-icon" src="/img/icon-social-gh.svg" alt="" role="presentation" width="36" height="36">
                    <span class="index__social-caption">GitHub</span>
                </a>
            </div>
        </div>

        <div class="u-section--margin u-section--margin-large index__rank-panel">
            <h2 class="u-h1 u-h1--large u-mb-05" id="rankings-and-exchanges">Rankings and exchanges</h2>
            <p class="u-mb-20 index__description">Trade BIP on exchanges or track Minter’s performance in various rankings.</p>
            <div class="u-grid u-grid--small u-grid--vertical-margin--medium">
                <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                    <ResourceItem
                        link="https://coinmarketcap.com/currencies/minter-network/"
                        icon="rank-cmc"
                        title="CoinMarketCap"
                        tag="web"
                    >
                        <p>CoinMarketCap is the world’s leading cryptocurrency data provider.</p>

                        <template v-if="bipPrice">
                            <div class="u-h--uppercase u-mt-20 u-mb-05">Current BIP price</div>
                            <div class="index__rank-price u-text-number">
                                ${{ coinPrice(bipPrice) }}
                                <img class="index__rank-price-splat" src="/img/index-rating-splat-3.png" srcset="/img/index-rating-splat-3@2x.png 2x" alt="" role="presentation"/>
                            </div>
                        </template>
                    </ResourceItem>
                </div>
                <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                    <ResourceItem
                        link="https://www.coingecko.com/en/coins/bip"
                        icon="rank-coingecko"
                        title="CoinGecko"
                        tag="web"
                    >
                        <p>Founded in 2014, CoinGecko is one of the largest crypto analytics portals. The site provides in-depth analysis of the digital asset market by tracking not only price, volumes, and market cap, but also community growth, open-source code development, milestone events, and other crucial metrics.</p>
                    </ResourceItem>
                </div>
                <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                    <ResourceItem
                        link="https://www.bithumb.pro/en-us/exchange/professional?q=BIP-USDT"
                        icon="rank-bithumb"
                        title="Bithumb Global"
                        tag="web"
                    >
                        <p>Bithumb Global is a trading platform created as part of the South Korean top exchange Bithumb’s global expansion. Launched in 2019. Trading fees = 0.1%, BIP withdrawal fee = 2&nbsp;BIP.</p>
                    </ResourceItem>
                </div>
                <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                    <ResourceItem
                        link="https://www.hotbit.io/exchange?symbol=BIP_USDT"
                        icon="rank-hotbit"
                        title="Hotbit"
                        tag="web"
                    >
                        <p>Hotbit is a Chinese cryptocurrency exchange operating since 2018. Trading fees = 0.2% for takers and -0.05% for makers (the platform pays for placing orders), BIP withdrawal fee = 250&nbsp;BIP.</p>
                    </ResourceItem>
                </div>
                <!--<div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                    <ResourceItem
                        link="https://atomars.com/trading/BIPUSDT"
                        icon="rank-atomars"
                        title="Atomars"
                        tag="web"
                    >
                        <p>Atomars is a fast and easy-to-use crypto trading platform that was launched last year. Web and mobile applications, decentralized private wallets, user portfolio, market barometer. No trading fees charged to new users for 60 days, 0.2% for market orders and 0.1% for limit orders after. Fee for withdrawing BIP = 1&nbsp;BIP.</p>
                    </ResourceItem>
                </div>-->
                <!--<div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                    <ResourceItem
                        link="https://my.minter.global"
                        icon="rank-global"
                        title="Minter Global"
                        tag="web"
                    >
                        <p>Minter Global OÜ is an Estonian company that is licensed to sell and purchase virtual assets, such as BIP tokens. It offers fully compliant exchange services to the corporate customers and natural persons with the access to SEPA payment accounts.</p>
                    </ResourceItem>
                </div>-->
            </div>

            <h2 class="u-h1 u-h1--large u-mb-05 u-section--top-margin u-section--top-margin-large" id="track">Track BIP</h2>
            <p class="u-mb-20 index__description">Track BIP’s market price and trading activity in the best portfolio applications.</p>
            <div class="u-grid u-grid--small u-grid--vertical-margin--medium">
                <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                    <ResourceItem
                        link="https://blockfolio.com/"
                        icon="rank-blockfolio"
                        title="Blockfolio"
                        tag="app"
                    >
                        <p>The world’s most popular cryptocurrency portfolio management application. 100% free, this app will allow you to not only monitor market rates and cryptocurrency charts, including those of BIP, but also receive news and announcements coming directly from the teams of tokens you are interested in.</p>
                    </ResourceItem>
                </div>
                <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                    <ResourceItem
                        link="https://delta.app/en"
                        icon="rank-delta"
                        title="Delta"
                        tag="app"
                    >
                        <p>A popular crypto tracker released as an application for both iOS and Android. Arrange your portfolio and keep track of your favorite coins.</p>
                    </ResourceItem>
                </div>
                <div class="u-cell u-cell--large--1-3 u-cell--medium--1-2">
                    <ResourceItem
                        link="https://coinstats.app/en/portfolio"
                        icon="rank-coinstats"
                        title="CoinStats"
                        tag="app"
                    >
                        <p>Sync your CoinStats portfolio with wallets and accounts on your preferred exchanges so that you don’t have to enter transaction data manually.</p>
                    </ResourceItem>
                </div>
            </div>
        </div>

        <h2 class="u-h--uppercase u-mb-10">Disclaimer</h2>
        <div class="index__disclaimer">
            <p>Minter.org may provide third parties content and links to third parties websites. We do not monitor or have any control over third parties content. It represents the views and opinions of its creators, which may not be endorsed by us.</p>
            <p>Any information presented is not to be construed as legal, financial, investment or other advice. We do not warrant the accuracy, completeness, suitability or usefulness of the information provided. To the extent possible, we disclaim any and all liability to any party for any direct, indirect, implied, punitive, special, incidental or other consequential damages arising directly or indirectly from any use of the information at this website.</p>
            <p>Operations with virtual assets pose intrinsic risks, including the risk of monetary loss. We strongly suggest you seek professional advice before engaging in any operations with virtual assets. We do not guarantee the accuracy of the exchange rates provided by third parties. Before you perform transactions related to currency conversion, check the current exchange rate.</p>
        </div>
    </div>
</template>
