<script>
    import {validationMixin} from 'vuelidate';
    import required from 'vuelidate/lib/validators/required';
    import minLength from 'vuelidate/lib/validators/minLength';
    import maxLength from 'vuelidate/lib/validators/maxLength';
    import {authRegister} from "~/api";
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
                    code: '',
                },
                sve: {
                    phone: {invalid: false, isActual: false, message: ''},
                    code: {invalid: false, isActual: false, message: ''},
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
                code: {
                    required,
                    server: getServerValidator('code'),
                },
            },
        },
        methods: {
            onAcceptPhone: makeAccepter('phone', true),
            submitForm() {

            }
        }
    }
</script>

<template>
    <form class="u-grid u-grid--medium u-grid--vertical-margin" @submit.prevent="submitForm">
        <div class="u-cell u-cell--medium--2-3">
            <div class="u-grid u-grid--vertical-margin--small">
                <div class="u-cell u-cell--large--2-3">
                    <div class="u-grid u-grid--small u-grid--vertical-margin">
                        <div class="u-cell u-cell--small--2-3">
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
                        <div class="u-cell u-cell--small--1-3">
                            <label class="form-field" :class="{'is-error': $v.form.code.$error}">
                                <input class="form-field__input" type="text" v-check-empty
                                       v-model.trim="form.code"
                                       @blur="$v.form.code.$touch()"
                                       @input="sve.code.isActual = false"
                                >
                                <span class="form-field__label">{{ tt('Code', 'auth.input-code') }}</span>
                            </label>
                            <span class="form-field__error" v-if="$v.form.code.$dirty && !$v.form.code.required">{{ tt('Enter code', 'auth.input-code-error-required') }}</span>
                            <span class="form-field__error" v-if="$v.form.code.$dirty && !$v.form.code.server">{{ sve.code.message }}</span>
                        </div>
                    </div>
                </div>
                <div class="u-cell u-cell--large--1-3 card__auth-help">
                    We have sent you the verification code via SMS. Resend in 0:34 seconds…
                </div>
            </div>
        </div>
        <div class="u-cell u-cell--medium--1-3">
            <button class="button button--green button--full">Continue</button>
        </div>
    </form>
</template>

<style scoped>

</style>
