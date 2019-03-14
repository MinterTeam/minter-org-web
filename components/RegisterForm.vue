<script>
    import {validationMixin} from 'vuelidate';
    import withParams from 'vuelidate/lib/withParams';
    import {req} from 'vuelidate/lib/validators/common';
    import required from 'vuelidate/lib/validators/required';
    import email from 'vuelidate/lib/validators/email';
    import minLength from 'vuelidate/lib/validators/minLength';
    import maxLength from 'vuelidate/lib/validators/maxLength';
    import {authRegister, authConfirm} from "~/api";
    import {makeAccepter} from "~/assets/utils";
    import checkEmpty from '~/assets/v-check-empty';
    import {getServerValidator, fillServerErrors, getErrorText} from "~/assets/server-error";
    import {USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH} from '~/assets/variables';
    import InputMaskedPhone from '~/components/InputMaskedPhone';
    import InputMaskedName from '~/components/InputMaskedName';

    /** @type {Array<string>} */
    const callingCodeList = require('~/tmp/country-codes.json');

    // checkbox validator
    const checked = withParams({ type: 'checked' }, (value) => {
        return !req(value) || value === true;
    });

    //@TODO https://github.com/OpenBookPrices/country-data

    export default {
        components: {
            InputMaskedPhone,
            InputMaskedName,
        },
        directives: {
            checkEmpty,
        },
        mixins: [validationMixin],
        data() {
            return {
                isFormSending: false,
                serverError: '',
                serverSuccess: false,
                form: {
                    countryCode: '',
                    phoneNumber: '',
                    phone: '',
                    username: '',
                    // legalTerms: false,
                    // legalPrivacy: false,
                },
                sve: {
                    countryCode: {invalid: false, isActual: false, message: ''},
                    phoneNumber: {invalid: false, isActual: false, message: ''},
                    phone: {invalid: false, isActual: false, message: ''},
                    username: {invalid: false, isActual: false, message: ''},
                },
            };
        },
        validations() {
            let form = {
                countryCode: {
                    required,
                    server: getServerValidator('countryCode'),
                },
                phoneNumber: {
                    required,
                    server: getServerValidator('phoneNumber'),
                },
                phone: {
                    minLength: minLength(8), // +290 1234
                    maxLength: maxLength(16), // +590 700 123 456 789
                    server: getServerValidator('phone'),
                },
                username: {
                    required,
                    minLength: minLength(USERNAME_MIN_LENGTH),
                    maxLength: maxLength(USERNAME_MAX_LENGTH),
                    server: getServerValidator('username'),
                },
                // legalTerms: {
                //     checked,
                // },
                // legalPrivacy: {
                //     checked,
                // },
            };
            return {form};
        },
        computed: {

        },
        watch: {
            // find countryCode and put rest to phoneNumber
            'form.phone': function (newVal) {
                const countryCode = getCountryCode(newVal);
                this.form.countryCode = countryCode;
                this.form.phoneNumber = newVal.substr(countryCode.length);
            }
        },
        mounted() {
            // initialize Account Kit with CSRF protection
            window.AccountKit_OnInteractive = function () {
                console.log('acc loaded')
                // window.AccountKit.init({
                //     appId: "393177347907472",
                //     state: document.head.querySelector('meta[name="csrf-token"]').content,
                //     debug: true,
                //     version: "v1.3",
                //     display: "modal",
                //     fbAppEventsEnabled: true
                // });
            };
        },
        methods: {
            onAcceptUsername: makeAccepter('username', true),
            onAcceptPhone: makeAccepter('phone', true),
            // phone form submission handler
            smsLogin(csrf) {
                return new Promise((resolve, reject) => {
                    try {
                        window.AccountKit.init({
                            appId: "393177347907472",
                            state: csrf,
                            debug: true,
                            version: "v1.3",
                            display: "modal",
                            fbAppEventsEnabled: true
                        });

                        window.AccountKit.login(
                            'PHONE',
                            this.form,
                            resolve,
                        );
                    } catch (e) {
                        reject();
                    }
                })
            },
            submitForm() {
                if (this.isFormSending) {
                    return;
                }
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return;
                }
                this.isFormSending = true;
                this.serverError = '';
                this.serverSuccess = false;
                // mark all fields dirty
                this.$v.$touch();

                authRegister(this.form)
                    .then((data) => {
                        return this.smsLogin(data.confirmation.id);
                    })
                    .then((response) => {
                        console.log('loginCallback', response);
                        if (response.status === "PARTIALLY_AUTHENTICATED") {
                            // Send code to server to exchange for access token
                            return authConfirm(response.state, response.code);
                        } else {
                            // "NOT_AUTHENTICATED" || "BAD_PARAMS"
                            throw new Error(response.status)
                        }
                    })
                    .then((response) => {
                        this.isFormSending = false;
                        this.serverSuccess = true;
                        this.$store.commit('LOGIN', response);
                        console.log('LOGIN', response)
                    })
                    .catch((error) => {
                        let hasValidationErrors = fillServerErrors(error, this.sve);
                        if (!hasValidationErrors) {
                            this.serverError = getErrorText(error);
                        }
                        this.isFormSending = false;
                    });
            },
        },
    };

    function getCountryCode(phone) {
        // remove first "+"
        phone = phone.substr(1);
        if (!phone) {
            return '';
        }
        // callingCodeList is sorted by length, so take
        const code = callingCodeList.find((code) => {
            return phone.indexOf(code) === 0;
        });
        return code ? ('+' + code) : '';
    }
</script>

<template>
    <form class="" novalidate @submit.prevent="submitForm">
        <div class="form-row from-row--with-field">
            <label class="form-field" :class="{'is-error': $v.form.phone.$error}">
                <InputMaskedPhone class="form-field__input" v-check-empty
                                  @accept="onAcceptPhone"
                                  @blur.native="$v.form.phone.$touch()"
                                  @input.native="sve.phone.isActual = false"
                />
                <span class="form-field__label">{{ tt('Enter mobile number', 'auth.input-phone') }}</span>
            </label>
            <span class="form-field__error" v-if="$v.form.phone.$dirty && !$v.form.phone.server">{{ sve.phone.message }}</span>
            <span class="form-field__error" v-else-if="$v.form.phone.$error || ($v.form.phone.$dirty && $v.form.phoneNumber.$invalid)">{{ tt('Invalid number', 'auth.input-phone-error-required') }}</span>
            <span class="form-field__error" v-else-if="$v.form.phone.$dirty && $v.form.countryCode.$invalid">{{ tt('Invalid country code', 'auth.input-phone-error-required') }}</span>
        </div>
        <div class="form-row from-row--with-field">
            <label class="form-field" :class="{'is-error': $v.form.username.$error}">
                <InputMaskedName class="form-field__input" v-check-empty
                                 @accept="onAcceptUsername"
                                 @blur.native="$v.form.username.$touch()"
                                 @input.native="sve.username.isActual = false"
                />
                <span class="form-field__label">{{ tt('Choose @username', 'index.auth-sign-up-username') }}</span>
            </label>
            <span class="form-field__error" v-if="$v.form.username.$dirty && !$v.form.username.required">{{ tt('Enter username', 'index.auth-error-username-required') }}</span>
            <span class="form-field__error" v-if="$v.form.username.$dirty && !$v.form.username.minLength">{{ tt('Username is too short', 'index.auth-error-username-min') }}</span>
            <span class="form-field__error" v-if="$v.form.username.$dirty && !$v.form.username.maxLength">{{ tt('Username is too long', 'index.auth-error-username-max') }}</span>
            <span class="form-field__error" v-if="$v.form.username.$dirty && !$v.form.username.server">{{ sve.username.message }}</span>
        </div>
        <!--<div class="form-row">
            <label class="form-checkbox" :class="{'is-error': $v.form.legalTerms.$error}">
                <input class="form-checkbox__input-native" type="checkbox" v-model="form.legalTerms" @change="$v.form.legalTerms.$touch()"/>
                <span class="form-checkbox__input-visible"></span>
                <span class="form-checkbox__label">{{ tt('I have read, understood and accepted this', 'role.agreement-description') }} <a class="link&#45;&#45;default u-display-ib" href="https://www.minter.network/legal/terms.pdf" target="_blank" rel="noopener">{{ tt('Terms of use', 'invite.agreement-terms') }}</a></span>
            </label>
            <label class="form-checkbox" :class="{'is-error': $v.form.legalPrivacy.$error}">
                <input class="form-checkbox__input-native" type="checkbox" v-model="form.legalPrivacy" @change="$v.form.legalPrivacy.$touch()"/>
                <span class="form-checkbox__input-visible"></span>
                <span class="form-checkbox__label">{{ tt('I have read, understood and accepted this', 'role.agreement-description') }} <a class="link&#45;&#45;default u-display-ib" href="https://www.minter.network/legal/privacy.pdf" target="_blank" rel="noopener">{{ tt('Privacy policy', 'invite.agreement-privacy-policy') }}</a></span>
            </label>
        </div>-->
        <div class="form-row form-row--large">
            <button class="button button--main button--full" :class="{'is-loading': isFormSending, 'is-disabled': $v.$invalid}">
                <span class="button__content">{{ tt('Create', 'invite.button') }}</span>
                <svg class="button-loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                    <circle class="button-loader__path" cx="21" cy="21" r="12"></circle>
                </svg>
            </button>
            <div class="form-field__error" v-if="serverError">{{ serverError }}</div>
            <!--<div class="form-field__help" v-if="serverSuccess">Success. Redirecting…</div>-->
        </div>


        <!--<div class="u-grid u-grid&#45;&#45;small u-grid&#45;&#45;vertical-margin&#45;&#45;small" v-if="!serverSuccess">


            <div class="u-cell u-cell&#45;&#45;small&#45;&#45;1-2">
                <button class="button button&#45;&#45;green button&#45;&#45;full" :class="{'is-loading': isFormSending, 'is-disabled': $v.$invalid}">
                    <span class="button__content">{{ tt('Get started', 'auth.submit-button') }}</span>
                    <svg class="button-loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                        <circle class="button-loader__path" cx="21" cy="21" r="12"></circle>
                    </svg>
                </button>
            </div>
            <div class="u-cell u-cell&#45;&#45;small&#45;&#45;1-2 index-intro__form-notice">
                <span v-if="serverSuccess">{{ tt('Request have successfully submitted', 'auth.success') }}</span>
                <span v-else>We'll send you a&nbsp;verification code  to&nbsp;setup your&nbsp;account.</span>
            </div>


        </div>
        <div class="form-field__error" v-if="serverError">{{ serverError }}</div>
        <div class="index-pay__form-item" v-if="serverSuccess"></div>-->
    </form>
</template>
