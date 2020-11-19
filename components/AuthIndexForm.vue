<script>
    import {validationMixin} from 'vuelidate';
    import required from 'vuelidate/lib/validators/required';
    import email from 'vuelidate/lib/validators/email';
    import {authEmailSend} from "~/api/id.js";
    import {getServerValidator, fillServerErrors, getErrorText} from "~/assets/server-error";
    import checkEmpty from '~/assets/v-check-empty';

    export default {
        directives: {
            checkEmpty,
        },
        mixins: [validationMixin],
        props: {
            invitation: {
                type: String,
            },
        },
        data() {
            return {
                isFormSending: false,
                serverError: '',
                serverSuccess: false,
                form: {
                    email: '',
                },
                sve: {
                    email: {invalid: false, isActual: false, message: ''},
                },
            };
        },
        validations: {
            form: {
                email: {
                    required,
                    email,
                    server: getServerValidator('email'),
                },
            },
        },
        methods: {
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

                //@TODO captcha and fp
                authEmailSend({email: this.form.email, invitation: this.invitation})
                    .then((response) => {
                        this.isFormSending = false;
                        this.serverSuccess = true;
                        this.$emit('success');
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
        <div class="intro__form" v-if="!serverSuccess">
            <div class="intro__form-field">
                <label class="form-field" :class="{'is-error': $v.form.email.$error}">
                    <input type="email" class="form-field__input" v-check-empty
                           v-model.trim="form.email"
                           @blur="$v.form.email.$touch()"
                           @input="sve.email.isActual = false"
                    >
                    <span class="form-field__label">E-mail</span>
                </label>
                <span class="form-field__error" v-if="$v.form.email.$dirty && !$v.form.email.required">Enter your e-mail</span>
                <span class="form-field__error" v-if="$v.form.email.$dirty && !$v.form.email.email">E-mail is invalid</span>
                <span class="form-field__error" v-if="$v.form.email.$dirty && !$v.form.email.server">{{ sve.email.message }}</span>
            </div>

            <button class="intro__form-button button button--green" :class="{'is-loading': isFormSending}">
                <span class="button__content">Launch</span>
                <svg class="loader loader--button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <circle class="loader__path" cx="20" cy="20" r="11"></circle>
                </svg>
            </button>
        </div>
        <div class="form-field__error" v-if="serverError">{{ serverError }}</div>
        <div class="intro__form-success" v-if="serverSuccess">
            Check your email for a magic sign in link
        </div>
    </form>
</template>
