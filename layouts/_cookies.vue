<script>
import {grantConsent} from '~/plugins/seo-gtm-consent.js';

export default {
    data() {
        return {
            settings: {
                ga: true,
                ym: true,
                fb: true,
            },
            showCookies: !window.localStorage.getItem('minter-cookies-accepted'),
            showSettings: false,
        };
    },
    methods: {
        acceptCookies() {
            grantConsent(this.settings);
            window.localStorage.setItem('minter-cookies-accepted', 'accepted');
            this.showCookies = false;
        },
    },
};
</script>

<template>
    <div class="cookies" v-if="showCookies">
        <div class="u-container">
            <div class="u-relative">
                <div :class="{'u-visually-hidden': showSettings}">
                    <h2 class="cookies__title">This website uses cookies</h2>
                    <p>We use cookies to operate our service, to personalise content and ads, to remember your preferences. We also use cookies for security purposes. We share information about your use of our website with our social media, advertising and analytics partners who may combine it with other information that you have provided to them or that they’ve collected from your use of their services.</p>
                    <p class="u-mb-10">You may find more information <a class="link--default u-display-ib" href="/legal/privacy.pdf" target="_blank">here</a>.</p>

                    <div class="button-group u-mb-10">
                        <button class="cookies__button button button--main" @click="acceptCookies">Yes, I agree</button>
                        <button class="cookies__button--settings link link--default u-semantic-button" @click="showSettings = true">Cookie settings</button>
                    </div>

                    <p class="cookies__note">By clicking ‘Yes, I Agree’ you will allow the use of all cookies. Your settings can be changed, including withdrawing your consent at any time, by clicking ‘Cookie settings’. We use third-party service providers to monitor and analyze the use of our service. They use cookies to collect the data, but such data does not reveal your identity. These cookies do not store any personally identifiable information.</p>
                </div>

                <div class="cookies__settings" v-if="showSettings">
                    <h2 class="cookies__title u-mb-15">
                        <button class="cookies__back link--opacity u-semantic-button" @click="showSettings = false">
                            <img class="cookies__back-icon" src="/img/icon-back.svg" alt="Back" width="24" height="24">
                        </button>
                        Cookie settings
                    </h2>
                    <label class="form-check u-fw-700">
                        <input type="checkbox" class="form-check__input" v-model="settings.ga" :true-value="false" :false-value="true">
                        <span class="form-check__label form-check__label--checkbox">Turn off Google Analytics</span>
                    </label>
                    <label class="form-check u-fw-700">
                        <input type="checkbox" class="form-check__input" v-model="settings.ym" :true-value="false" :false-value="true">
                        <span class="form-check__label form-check__label--checkbox">Turn off Yandex.Metrica</span>
                    </label>
                    <label class="form-check u-fw-700">
                        <input type="checkbox" class="form-check__input" v-model="settings.fb" :true-value="false" :false-value="true">
                        <span class="form-check__label form-check__label--checkbox">Turn off Facebook Pixel</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

