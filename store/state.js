export default function createStore() {
    return {
        sectionName: '',
        /** @type MinterIdUser|null */
        user: null,
        userTimeStamp: 0,
        // cache inviter names
        /** @type {{string: InvitationData}}*/
        invitationCache: {},
        isSnackbarActive: false,
    };
}




/**
 * @typedef {Object} Transaction
 * @property {string} name
 * @property {number} amount
 * @property {string} coin
 * @property {string} image
 * @property {string} timestamp
 */


