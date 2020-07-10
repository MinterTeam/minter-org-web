<script>
    import {ID_HOST} from '~/assets/variables.js';

    export default {
        ID_HOST,
        props: {
            title: {
                type: String,
                default: 'Minter',
            },
        },
    }
</script>

<template>
    <header class="header header--white">
        <div class="header__container u-container u-container--large">
            <nuxt-link class="header__logo" to="/">
                <!-- размеры у лого заданы чтобы сразу правильно расчиталось в js -->
                <img class="header__logo-image" src="/img/minter-logo-circle.svg" alt="Minter" width="36" height="36">
                <div class="header__logo-text">{{ title }}</div>
            </nuxt-link>

            <div class="header__controls">
                <!--<nuxt-link to="/auth" class="header__controls-link link&#45;&#45;opacity" v-if="!$store.state.user && !isAuthPage">
                    Login
                </nuxt-link>
                <button class="header__controls-link link link&#45;&#45;opacity u-semantic-button" @click="logout" v-if="$store.state.user && isProfilePage">Logout</button>-->
                <a :href="$options.ID_HOST + '/profile'" class="header__controls-link header__controls-user link--opacity" v-if="this.$store.state.user"> <!-- && !isCardLayout-->
                    <!--
                                            <div class="header__controls-user-name" v-if="$store.state.user.username">
                                                @{{ $store.state.user.username }}
                                            </div>
                    -->
                    <div class="header__controls-user-name">Profile</div>
                    <div class="header__controls-user-avatar" :style="`background-image: url(${$store.state.user.picture}&alias=thumb-x2);`" v-if="$store.state.user.picture"></div>
                </a>
            </div>

        </div>
    </header>
</template>
