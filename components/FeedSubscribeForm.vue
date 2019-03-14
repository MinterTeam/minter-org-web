<script>
    import {validationMixin} from 'vuelidate';
    import required from 'vuelidate/lib/validators/required';
    import email from 'vuelidate/lib/validators/email';
    import {authRegister} from "~/api";
    import {getServerValidator, fillServerErrors, getErrorText} from "~/assets/server-error";
    import checkEmpty from '~/assets/v-check-empty';

    export default {
        components: {
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
                    server: getServerValidator('phone'),
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
                authRegister(this.form)
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
        <div class="feed__subscribe-controls" v-if="!serverSuccess">
            <div class="feed__subscribe-field">
                <label class="form-field" :class="{'is-error': $v.form.email.$error}">
                    <input class="form-field__input" type="text" v-check-empty
                           v-model.trim="form.email"
                           @blur="$v.form.email.$touch()"
                           @input="sve.email.isActual = false"
                    >
                    <span class="form-field__label">{{ tt('Your E-mail', 'feed.input-email') }}</span>
                </label>
                <span class="form-field__error" v-if="$v.form.email.$dirty && !$v.form.email.required">{{ tt('Enter your e-mail', 'feed.input-email-error-required') }}</span>
                <span class="form-field__error" v-else-if="$v.form.email.$dirty && !$v.form.email.email">{{ tt('Invalid e-mail', 'feed.input-email-error-required') }}</span>
                <span class="form-field__error" v-else-if="$v.form.email.$dirty && !$v.form.email.server">{{ sve.email.message }}</span>
            </div>

            <button class="feed__subscribe-button button button--black" :class="{'is-loading': isFormSending}">
                <span class="button__content">{{ tt('Subscribe', 'feed.subscribe-button') }}</span>
                <svg class="button-loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                    <circle class="button-loader__path" cx="21" cy="21" r="12"></circle>
                </svg>
            </button>

        </div>
        <div class="form-field__error" v-if="serverError">{{ serverError }}</div>
        <div class="index-pay__form-item" v-if="serverSuccess">
            {{ tt('Request have successfully submitted', 'feed.subscribe-success') }}
        </div>
    </form>
</template>
