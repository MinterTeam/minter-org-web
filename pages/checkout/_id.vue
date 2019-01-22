<script>
    import {getProductCard} from '~/api';
    import CardCheckout from '~/components/CardCheckout';

    export default {
        layout: 'card',
        components: {
            CardCheckout,
        },
        asyncData() {
            return getProductCard()
                .then((card) => {
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
            <CardCheckout :card="card"/>
        </div>

    </div>
</template>
