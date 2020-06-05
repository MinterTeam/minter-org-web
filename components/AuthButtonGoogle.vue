<script>
    import {getErrorText} from '~/assets/server-error.js';
    import {GOOGLE_SIGNIN_CLIENT_ID} from '~/assets/variables.js'

    export default {
        props: {
            invitation: {
                type: Object,
            },
        },
        data() {
            return {
                isGoogleLoaded: false,
            };
        },
        created() {
            window.googleInitAuth = () => {
                gapi.load('auth2', () => {
                    this.isGoogleLoaded = true;

                    const auth2 = gapi.auth2.init({
                        client_id: GOOGLE_SIGNIN_CLIENT_ID,
                        // Request scopes in addition to 'profile' and 'email'
                        scope: 'email profile openid',
                    });

                    auth2.attachClickHandler(document.querySelector('[data-google-signin-button]'), {},
                        (googleUser) => {
                            this.handleAuthResponse(googleUser.getAuthResponse());
                        }, (error) => {
                            this.$emit('error', 'Google authentication failed: ' + error.error)
                        });
                });
            };
        },
        methods: {

            // promisify
            // gapiAuthorize(options) {
            //     return new Promise((resolve, reject) => {
            //         gapi.auth2.authorize({
            //             client_id: GOOGLE_SIGNIN_CLIENT_ID,
            //             scope: 'email profile openid',
            //             response_type: 'id_token code',
            //             prompt: 'select_account',
            //             ...options,
            //         }, (response) => {
            //             console.log(response)
            //             if (response.error) {
            //                 reject(response.error);
            //             }
            //
            //             resolve(response);
            //         });
            //     })
            // },
            // gapiAuthorizeFixed() {
            //     return this.gapiAuthorize()
            //         // workaround to ios webview error
            //         // .catch((error) => {
            //         //     if (error === 'popup_closed_by_user') {
            //         //         return this.gapiAuthorize({prompt: 'none'})
            //         //     } else {
            //         //         throw error;
            //         //     }
            //         // })
            //         .catch((error) => {
            //             // emit google's error
            //             this.$emit('error', 'Google authentication failed: ' + error)
            //         });
            // },
            handleAuthResponse(response) {
                // The user authorized the application for the scopes requested.
                // You can also now use gapi.client to perform authenticated requests.
                let params = {id_token: response.id_token};
                if (this.invitation) {
                    params.type = this.invitation.type;
                    params.invitation = this.invitation.code;
                }
                return this.$store.dispatch('AUTHORIZE', response.id_token)
                    .then(() => {
                        if (!this.$store.getters.isMinterIdProfileActive) {
                            window.location = 'https://id.minter.org/share'
                        } else {
                            //@TODO page with complete registration
                            window.location = 'https://id.minter.org/share'
                        }
                    })
                    .catch((err) => {
                        console.log(err.request)
                        if (err.request.status === 401) {
                            this.$emit('error', 'forbidden')
                        } else {
                            this.$emit('error', getErrorText(err))
                        }
                    });

            },
        },
    }
</script>

<template>
    <div>
        <button class="google-signin-button u-semantic-button" data-google-signin-button v-show="isGoogleLoaded">
            <svg width="18px" height="18px" viewBox="0 0 48 48" class="google-signin-button__icon">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
            </svg>
            <span class="google-signin-button__text">Sign in with Google</span>
        </button>
        <div v-show="!isGoogleLoaded">Loading…</div>
        <script src="https://apis.google.com/js/platform.js?onload=googleInitAuth" async defer></script>
    </div>
</template>
