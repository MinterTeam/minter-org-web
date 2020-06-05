import {authCheckInvitation, authRegister, getUser, updateUser} from "~/api/id.js";

export default {
    AUTH_REGISTER: ({commit}, data) => {
        return authRegister(data)
            .then((user) => {
                commit('SET_USER', user)
            });
    },
    AUTH_CHECK_INVITATION: ({commit}, invitation) => {
        return authCheckInvitation(invitation)
            .then((invitationData) => {
                commit('SET_INVITATION_CACHE', {
                    invitation,
                    name: invitationData.name,
                    type: invitationData.type,
                });
            });
    },
    UPDATE_PROFILE: ({ state, commit }, userData) => {
        return updateUser(userData)
            .then((user) => {
                commit('SET_USER', user);
            });
    },
    FETCH_PROFILE: ({ state, commit }, force) => {
        // don't fetch more often than 10s
        if (!force && Date.now() - state.userTimeStamp < 10000) {
            return Promise.resolve();
        }
        return getUser()
            .then((user) => {
                commit('SET_USER', user);
            });
    },
};
