<script>
    import CardSocial from '~/components/CardSocial';
    import CardThanksList from '~/components/CardThanksList';

    export default {
        components: {
            CardSocial,
            CardThanksList,
        },
        props: {
            /** @type Card */
            card: {
                type: Object,
                requireD: true,
            },
        }
    }
</script>

<template>
    <div class="card-wrap">
        <div class="card__grid u-grid u-grid--small u-grid--vertical-margin--small">
            <div class="card__main-cell u-cell u-cell--large--1-2 u-text-center">
                <div class="card card__body card__body--medium">
                    <div class="card__avatar card__avatar--pop" :style="{'background-image': `url(${card.avatar})`}"></div>
                    <h1 class="card__name u-h1">{{ card.name }}</h1>
                    <p class="card__description">{{ card.description }}</p>
                    <CardSocial class="card__social-list card__social-list--center" template="icons"/>
                    <button class="card__thanks-button button button--green ">Say Thanks</button>
                    <div class="card__thanks-help">
                        You can support this creator by saying “Thanks”. <br> Some legal info or whatever.
                    </div>
                </div>
            </div>

            <!-- content -->
            <div class="u-cell u-cell--large--1-2">
                <div class="card">
                    <div class="card__video" v-if="card.content.video">
                        <iframe class="card__video-iframe" :src="`https://player.vimeo.com/video/${card.content.video}?byline=false&portrait=false&title=false`" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="card__content card__content--medium">
                        <div class="card__social-share-list">
                            <a class="card__social-share-button button button--medium social--facebook" href="#">
                                <img class="button__icon" src="/img/icon-social-fb-white.svg" alt="Facebook">
                                Share
                            </a>
                            <a class="card__social-share-button button button--medium social--vk" href="#">
                                <img class="button__icon" src="/img/icon-social-vk-white.svg" alt="VK">
                                Share
                            </a>
                            <a class="card__social-share-button button button--medium social--twitter" href="#">
                                <img class="button__icon" src="/img/icon-social-tw-white.svg" alt="Twitter">
                                Share
                            </a>
                        </div>
                        <p>{{ card.content.desc1 }}</p>
                        <p>{{ card.content.desc2 }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

