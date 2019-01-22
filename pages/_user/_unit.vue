<script>
    import {getProductCard} from '~/api';
    import CardUnit from '~/components/CardUnit';

    export default {
        layout: 'card',
        components: {
            CardUnit,
        },
        asyncData() {
            return getProductCard()
                .then((card) => {
                    card.description = 'Designed by Dave \n Bailey https://www.davebailey.xyz';
                    return {
                        card,
                    }
                })
        },
        data() {
            return {
                /** @type Card */
                card: {},
            }
        },
        computed: {
        },
    }
</script>

<template>
    <div>
        <div class="card__bg" :style="{'background-image': `url(${card.bg})`}"></div>

        <div class="u-container">
            <CardUnit :card="card"/>
        </div>

    </div>
</template>
