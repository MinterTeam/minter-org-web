<script>
    import Vue from 'vue';
    import axios from 'axios';
    import {getUserCard} from '~/api';
    import CardUser01 from '~/components/CardUser01';
    import CardUser02 from '~/components/CardUser02';
    import CardUser03 from '~/components/CardUser03';



    export default {
        layout: 'card',
        components: {
            CardUser01,
            CardUser02,
            CardUser03,
        },
        asyncData() {
            return getUserCard()
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
        mounted() {
            axios.get('https://vimeo.com/api/v2/channel/travel/videos.json')
                .then((response) => {
                    console.log({response});
                    this.card.content.video = response.data[0].id;
                    Vue.set(this, 'card', this.card);
                })
        },
    }
</script>

<template>
    <div>
        <div class="card__bg" :style="{'background-image': `url(${card.bg})`}"></div>

        <div class="u-container">
            <CardUser01 :card="card" v-if="$route.params.user === '1'"/>
            <CardUser02 :card="card" v-else-if="$route.params.user === '2'"/>
            <CardUser03 :card="card" v-else-if="$route.params.user === '3'"/>
            <CardUser01 :card="card" v-else/>
        </div>

    </div>
</template>
