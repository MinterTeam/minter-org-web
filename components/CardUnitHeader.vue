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
        methods: {
            prepareHtml(text) {
                return text
                    .replace(/(?:\r\n|\r|\n)/g, '<br>')
                    .replace(/(?:(https?:\/\/[^\s\n\r<]+))/g, '<a class="link--default" href="$1" target="_blank" rel="nofollow noopener">$1</a>');
            }
        }
    }
</script>

<template>
    <div class="card__header">
        <div class="card__avatar card__avatar--inline" :style="{'background-image': `url(${card.avatar})`}"></div>
        <div class="card__header-content">
            <h1 class="card__name u-h1">{{ card.name }}</h1>
            <p class="card__description" v-html="prepareHtml(card.description)"></p>
            <CardSocial class="card__social-list--tight" template="icons"/>
        </div>
    </div>
</template>

