<script>
    export default {
        props: {
            /** @type 'icons'|'buttons' */
            template: {
                type: String,
                default: 'icons',
            },
        },
        computed: {
            urlPostfix() {
                return this.template === 'buttons' ? '-white' : '';
            },
            classString() {
                if (this.template === 'icons') {
                    return 'social-icon';
                }
                if (this.template === 'buttons') {
                    return 'social-button';
                }
            },
        }
    }
</script>

<template>
    <div class="social-list">
        <a :class="classString + (template === 'buttons' ? ' social--facebook' : '')" href="#">
            <img :src="`/img/icon-social-fb${urlPostfix}.svg`" alt="Facebook">
        </a>
        <a :class="classString + (template === 'buttons' ? ' social--vk' : '')" href="#">
            <img :src="`/img/icon-social-vk${urlPostfix}.svg`" alt="VK">
        </a>
        <a :class="classString + (template === 'buttons' ? ' social--twitter' : '')" href="#">
            <img :src="`/img/icon-social-tw${urlPostfix}.svg`" alt="Twitter">
        </a>
        <a :class="classString + (template === 'buttons' ? ' social--whatsapp' : '')" href="#">
            <img :src="`/img/icon-social-wa${urlPostfix}.svg`" alt="WhatsApp">
        </a>
        <a :class="classString + (template === 'buttons' ? ' social--telegram' : '')" href="#">
            <img :src="`/img/icon-social-tg${urlPostfix}.svg`" alt="Telegram">
        </a>
        <!--<a class="social-button social&#45;&#45;vk" href="#">
            <img src="/img/icon-social-vk.svg" alt="VK">
        </a>
        <a class="social-button social&#45;&#45;twitter" href="#">
            <img src="/img/icon-social-tw.svg" alt="Twitter">
        </a>
        <a class="social-button social&#45;&#45;whatsapp" href="#">
            <img src="/img/icon-social-wa.svg" alt="WhatsApp">
        </a>
        <a class="social-button social&#45;&#45;telegram" href="#">
            <img src="/img/icon-social-tg.svg" alt="Telegram">
        </a>-->
    </div>
</template>
