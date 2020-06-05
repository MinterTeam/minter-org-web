

export default {
    isMinterIdProfileComplete(state) {
        if (!state.user) {
            return false;
        }
        return !!(/*state.user.username && */state.user.name && state.user.country && state.user.language);
    },
    isMinterIdProfileActive(state) {
        if (!state.user) {
            return false;
        }
        return state.user.isActive;
    },

};
