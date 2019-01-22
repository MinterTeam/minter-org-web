<script>
    import {validationMixin} from 'vuelidate';
    import required from 'vuelidate/lib/validators/required';
    import minLength from 'vuelidate/lib/validators/minLength';
    import maxLength from 'vuelidate/lib/validators/maxLength';
    import {register} from "~/api";
    import {getServerValidator, fillServerErrors, getErrorText} from "~/assets/server-error";
    import {makeAccepter} from '~/assets/utils';
    import checkEmpty from '~/assets/v-check-empty';
    import InputMaskedPhone from '~/components/InputMaskedPhone';

    export default {
        components: {
            InputMaskedPhone,
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
                    phone: '',
                    name: '',
                },
                sve: {
                    phone: {invalid: false, isActual: false, message: ''},
                    name: {invalid: false, isActual: false, message: ''},
                },
            };
        },
        validations: {
            form: {
                phone: {
                    minLength: minLength(11),
                    maxLength: maxLength(13),
                    server: getServerValidator('phone'),
                },
                name: {
                    required,
                    server: getServerValidator('name'),
                },
            },
        },
        methods: {
            onAcceptPhone: makeAccepter('phone', true),
            submitForm() {
                if (this.isFormSending) {
                    return;
                }
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                this.isFormSending = true;
                this.serverError = '';
                this.serverSuccess = false;
                register(this.form)
                    .then((response) => {
                        this.isFormSending = false;
                        this.serverSuccess = true;
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
</script>

<template>
    <form class="" novalidate @submit.prevent="submitForm">
        <div class="u-grid u-grid--small u-grid--vertical-margin--small" v-if="!serverSuccess">
            <div class="u-cell u-cell--small--1-2">
                <label class="form-field" :class="{'is-error': $v.form.name.$error}">
                    <input class="form-field__input" type="text" v-check-empty
                           v-model.trim="form.name"
                           @blur="$v.form.name.$touch()"
                           @input="sve.name.isActual = false"
                    >
                    <span class="form-field__label">{{ tt('Your Name', 'auth.input-name') }}</span>
                </label>
                <span class="form-field__error" v-if="$v.form.name.$dirty && !$v.form.name.required">{{ tt('Enter your name', 'auth.input-name-error-required') }}</span>
                <span class="form-field__error" v-if="$v.form.name.$dirty && !$v.form.name.server">{{ sve.name.message }}</span>
            </div>

            <div class="u-cell u-cell--small--1-2">
                <label class="form-field" :class="{'is-error': $v.form.phone.$error}">
                    <InputMaskedPhone class="form-field__input" v-check-empty
                           @accept="onAcceptPhone"
                           @blur.native="$v.form.phone.$touch()"
                           @input.native="sve.phone.isActual = false"
                    />
                    <span class="form-field__label">{{ tt('Mobile Number', 'auth.input-phone') }}</span>
                </label>
                <span class="form-field__error" v-if="$v.form.phone.$dirty && !$v.form.phone.server">{{ sve.phone.message }}</span>
                <span class="form-field__error" v-else-if="$v.form.phone.$error">{{ tt('Invalid number', 'auth.input-phone-error-required') }}</span>

            </div>

            <div class="u-cell u-cell--small--1-2">
                <button class="button button--green button--full" :class="{'is-loading': isFormSending, 'is-disabled': $v.$invalid}">
                    <span class="button__content">{{ tt('Get started', 'auth.submit-button') }}</span>
                    <svg class="button-loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                        <circle class="button-loader__path" cx="21" cy="21" r="12"></circle>
                    </svg>
                </button>
            </div>
            <div class="u-cell u-cell--small--1-2 index-intro__form-notice">
                <span v-if="serverSuccess">{{ tt('Request have successfully submitted', 'auth.success') }}</span>
                <span v-else>We'll send you a&nbsp;verification code  to&nbsp;setup your&nbsp;account.</span>
            </div>


        </div>
        <div class="form-field__error" v-if="serverError">{{ serverError }}</div>
        <div class="index-pay__form-item" v-if="serverSuccess"></div>
    </form>
</template>
