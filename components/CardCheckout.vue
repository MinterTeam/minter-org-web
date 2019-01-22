<script>
    import {validationMixin} from 'vuelidate';
    import required from 'vuelidate/lib/validators/required';
    import {register} from "~/api";
    import {getServerValidator, fillServerErrors, getErrorText} from "~/assets/server-error";
    import checkEmpty from '~/assets/v-check-empty';
    import InputMaskedPhone from '~/components/InputMaskedPhone';
    import CardUnitHeader from '~/components/CardUnitHeader';

    export default {
        components: {
            InputMaskedPhone,
            CardUnitHeader,
        },
        directives: {
            checkEmpty,
        },
        mixins: [validationMixin],
        props: {
            /** @type Card */
            card: {
                type: Object,
                requireD: true,
            },
        },
        data() {
            return {
                form: {
                    amount: '$ 199',
                    currency: 'DESIGNCOIN (2945.9333)',
                },
                sve: {
                    amount: {invalid: false, isActual: false, message: ''},
                    currency: {invalid: false, isActual: false, message: ''},
                },
                finalAmount: '1 300 332 DESIGNCOIN',
                address: '3NHjbskDDGKgAwYu3rHqPbhzCEdQ1XZCRD',
            }
        },
        validations: {
            form: {
                amount: {
                    required,
                    server: getServerValidator('amount'),
                },
                currency: {
                    required,
                    server: getServerValidator('currency'),
                },
            },
        },
        methods: {

        }
    }
</script>

<template>
    <div class="card card-wrap">
        <CardUnitHeader :card="card"/>

        <div class="card__content card__content--section">
            <a class="card__back link--hover" href="/1/asd">
                <img class="card__back-icon" src="/img/icon-back.svg" alt="" role="presentation">
                <span>Return to Description</span>
            </a>
            <h2 class="card__content-title u-h2">Check Out</h2>

            <div class="u-grid u-grid--vertical-margin--small">
                <div class="u-cell u-cell--large--2-3">
                    <div class="u-grid u-grid--small u-grid--vertical-margin">
                        <div class="u-cell u-cell--small--1-2">
                            <label class="form-field" :class="{'is-error': $v.form.amount.$error}">
                                <input class="form-field__input" type="text" v-check-empty
                                       v-model.trim="form.amount"
                                       @blur="$v.form.amount.$touch()"
                                       @input="sve.amount.isActual = false"
                                >
                                <span class="form-field__label">{{ tt('Amount', 'checkout.input-amount') }}</span>
                            </label>
                            <span class="form-field__error" v-if="$v.form.amount.$dirty && !$v.form.amount.required">{{ tt('Enter amount', 'checkout.input-amount-error-required') }}</span>
                            <span class="form-field__error" v-if="$v.form.amount.$dirty && !$v.form.amount.server">{{ sve.amount.message }}</span>
                        </div>
                        <div class="u-cell u-cell--small--1-2">
                            <label class="form-field" :class="{'is-error': $v.form.currency.$error}">
                                <input class="form-field__input" type="text" v-check-empty
                                       v-model.trim="form.currency"
                                       @blur="$v.form.currency.$touch()"
                                       @input="sve.currency.isActual = false"
                                >
                                <span class="form-field__label">{{ tt('Currency', 'checkout.input-currency') }}</span>
                            </label>
                            <span class="form-field__error" v-if="$v.form.currency.$dirty && !$v.form.currency.required">{{ tt('Enter currency', 'checkout.input-currency-error-required') }}</span>
                            <span class="form-field__error" v-if="$v.form.currency.$dirty && !$v.form.currency.server">{{ sve.currency.message }}</span>
                        </div>
                    </div>
                </div>
                <div class="u-cell u-cell--large--1-3 card__auth-help">
                    Choose the amount in USD and the coin you wish to pay with. The final amount will be automatically converted.
                </div>
            </div>
        </div>
        <hr class="hr--section-divider">
        <div class="card__content card__content--section">
            <div class="u-grid u-grid--small u-grid--vertical-margin">
                <div class="u-cell u-cell--small--1-2">
                    <label class="form-field">
                        <input class="form-field__input" type="text" v-check-empty
                               v-model="finalAmount"
                        >
                        <span class="form-field__label">{{ tt('Final amount', 'checkout.input-final-amount') }}</span>
                    </label>
                </div>
                <div class="u-cell u-cell--small--1-2">
                    <label class="form-field">
                        <input class="form-field__input" type="text" v-check-empty
                               v-model="address"
                        >
                        <span class="form-field__label">{{ tt('Transfer DESIGNCOIN to this address', 'checkout.input-address') }}</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="card__content card__content--section card__content--success">
            <h2 class="card__content-title card__download-title u-h2">Download Link</h2>

            <div class="u-h u-h2">minter.org/download/19444adaui3oadi003/19333</div>
            <div class="card__sub-link-list">
                <button class="card__sub-link link--white link--hover u-semantic-button" href="">Send to E-mail</button>
                <button class="card__sub-link link--white link--hover u-semantic-button" href="">Add to Bookmarks</button>
            </div>
        </div>
    </div>
</template>

