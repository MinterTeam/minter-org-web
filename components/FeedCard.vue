<script>
    export default {
        props: {
            /** @type Card */
            card: {
                type: Object,
                requireD: true,
            },
            /** @type 'large'|'horizontal' */
            layout: {
                type: String,
            }
        },
    }
</script>

<template>
    <div class="feed-card" :class="{'feed-card--horizontal': layout === 'horizontal'}">
        <div class="feed-card__image" :style="{'background-image': `url(${card.image})`}">
            <img class="u-hidden" :src="card.image" alt="">
        </div>
        <div class="feed-card__content">
            <h3 class="feed-card__title" :class="layout === 'large' ? 'u-h2' : 'u-h5'">{{ card.name }}</h3>
            <p class="feed-card__description" v-if="layout !== 'horizontal'">{{ card.description }}</p>
            <div class="feed-card__meta">
                <div>
                    By {{ card.author }} ∙ <span class="u-display-ib">4 days ago</span>
                </div>
                <button class="feed-card__bookmark u-semantic-button">
                    <img src="/img/icon-bookmark.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>
