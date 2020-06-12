<script>
    import Footer from '~/layouts/_footer';

    export default {
        components: {

            Footer,
        },
        data() {
            return {

            };
        },
        computed: {
            isActiveProfile() {
                const user = this.$store.state.user;
                return user?.username && user.isPublic && !user.isHiddenProfile;
            }
        },
        methods: {

        },
    };
</script>

<template>
    <div class="main-wrap">
        <header class="header header--white">
            <div class="header__container u-container u-container--large">
                <nuxt-link class="header__logo" to="/">
                    <!-- размеры у лого заданы чтобы сразу правильно расчиталось в js -->
                    <img class="header__logo-image" src="/img/minter-logo-circle.svg" alt="Minter" width="36" height="36">
                    <div class="header__logo-text">Minter</div>
                </nuxt-link>

                <div class="header__controls">
                    <!--<nuxt-link to="/auth" class="header__controls-link link&#45;&#45;opacity" v-if="!$store.state.user && !isAuthPage">
                        Login
                    </nuxt-link>
                    <button class="header__controls-link link link&#45;&#45;opacity u-semantic-button" @click="logout" v-if="$store.state.user && isProfilePage">Logout</button>-->
                    <nuxt-link :to="'/' + $store.state.user.username" class="header__controls-link header__controls-user link--opacity" v-if="isActiveProfile"> <!-- && !isCardLayout-->
                        <!--
                                                <div class="header__controls-user-name" v-if="$store.state.user.username">
                                                    @{{ $store.state.user.username }}
                                                </div>
                        -->
                        <div class="header__controls-user-name">Profile</div>
                        <div class="header__controls-user-avatar" :style="`background-image: url(${$store.state.user.picture}&alias=thumb-x2);`" v-if="$store.state.user.picture"></div>
                    </nuxt-link>
                </div>

            </div>
        </header>

        <nuxt class="main-content"/>

        <Footer/>
    </div>
</template>

