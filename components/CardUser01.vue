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
        },
    }
</script>

<template>
    <div class="card card-wrap">
        <div class="card__header">
            <div class="card__avatar card__avatar--inline" :style="{'background-image': `url(${card.avatar})`}"></div>
            <div class="card__header-content">
                <h1 class="card__name u-h1">{{ card.name }}</h1>
                <p class="card__description">{{ card.description }}</p>
                <CardSocial class="card__social-list" template="buttons"/>
                <button class="card__thanks-button button button--green u-hidden-medium-up">Say Thanks</button>
            </div>
        </div>
        <div class="card__content">
            <div class="u-grid u-grid--medium u-grid--vertical-margin--medium">

                <!-- content -->
                <div class="u-cell u-cell--medium--2-3">
                    <h2 class="card__content-title u-h2">{{ card.content.title }}</h2>
                    <p>{{ card.content.desc1 }}</p>
                    <div class="card__video card__content-media" v-if="card.content.video">
                        <iframe class="card__video-iframe" :src="`https://player.vimeo.com/video/${card.content.video}?byline=false&portrait=false&title=false`" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <p>{{ card.content.desc2 }}</p>
                </div>

                <!-- aside -->
                <div class="u-cell u-cell--medium--1-3">
                    <button class="button button--green button--full u-hidden-medium-down">Say Thanks</button>
                    <CardThanksList/>
                </div>
            </div>
        </div>
    </div>
</template>

