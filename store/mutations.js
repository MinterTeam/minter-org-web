import Vue from 'vue';
import {resetAuthToken} from '~/api/id.js';

export default {
    SET_SECTION_NAME: (state, sectionName) => {
        state.sectionName = sectionName;
    },
    SET_USER: (state, user) => {
        state.user = {
            ...user,
            //@TODO use proper cachebust
            picture: user.picture + '?v=' + Math.random(),
        };
        state.userTimeStamp = Date.now();
    },
    LOGOUT,
    SET_INVITATION_CACHE: (state, {invitation, name, type}) => {
        Vue.set(state.invitationCache, invitation, {name, type, code: invitation})
    },
    REMOVE_INVITATION_CACHE: (state, invitation) => {
        delete state.invitationCache[invitation];
    },
    /**
     * Show snackbar if it is inactive
     */
    SET_SNACKBAR_ACTIVE: (state) => {
        state.isSnackbarActive = true;
    },
    /**
     * Set snackbar inactive so it can react to next SET_SNACKBAR_ACTIVE call
     */
    SET_SNACKBAR_INACTIVE: (state) => {
        state.isSnackbarActive = false;
    },
};

function LOGOUT(state) {
    state.user = null;
    // state.auth.password = null;
    // state.auth.advanced = null;
    resetAuthToken();
}
