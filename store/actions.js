import {getUser, updateUser} from "~/api/id.js";

export default {
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
