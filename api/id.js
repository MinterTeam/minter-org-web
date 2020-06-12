import axios from 'axios';
import Cookies from 'js-cookie';
import {ID_API_URL, ID_COOKIE_KEY, ID_COOKIE_DOMAIN, IMAGE_API_URL} from "~/assets/variables";
import addToCamelInterceptor from '~/assets/to-camel.js';
import {upload as imageUpload} from '~/api/image.js';

const instance = axios.create({
    baseURL: ID_API_URL,
});
addToCamelInterceptor(instance)

// const TOKEN_KEY = 'auth-token';
// const initialToken = typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem(TOKEN_KEY)) : false;
// if (initialToken) {
//     setAuthToken(initialToken);
// } else {
//     resetAuthToken();
// }


export default instance;

/**
 * @param {TokenData} tokenData
 */
// export function setAuthToken(tokenData) {
//     instance.defaults.headers.common['Authorization'] = 'Bearer ' + tokenData.token;
//     window.localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenData));
// }
//
export function resetAuthToken() {
    // remove cookie
    Cookies.remove(ID_COOKIE_KEY, {domain: ID_COOKIE_DOMAIN});
    // remove legacy cookie too
    Cookies.remove(ID_COOKIE_KEY);
    // delete instance.defaults.headers.common['Authorization'];
    // window.localStorage.removeItem(TOKEN_KEY);
}

export function hasAuthToken() {
    return !!Cookies.get(ID_COOKIE_KEY);
    // return 'Authorization' in instance.defaults.headers.common;
}
/**
 * Check invitation code
 * @param {string} invitation
 * @return {Promise<InvitationData>}
 */
export function authCheckInvitation(invitation) {
    return instance.get(`invitation/check/${invitation}`)
        .then((response) => {
            return response.data.data;
        });
}


/**
 * @param {string} id_token - google id_token
 * @return {Promise<MinterIdUser>}
 */
export function authorize(id_token) {
    return instance.post(`auth/google`, {
            invitation: 'future',
            id_token,
        }, {withCredentials: true})
        .then((response) => {
            return prettifyMinterIdUser(response.data.data);
        })
}


/**
 *
 * @return {Promise<MinterIdUser>}
 */
export function getUser() {
    return instance.get(`user`, {withCredentials: true})
        .then((response) => prettifyMinterIdUser(response.data.data));
}

/**
 * @param {MinterIdUser} user
 * @param {MinterIdUser} [originalUser]
 * @return {Promise<MinterIdUser>}
 */
export function updateUser(user, originalUser) {
    let userData = originalUser ? toOriginalMinterIdUser(user, originalUser) : user;
    userData = Object.keys(userData).reduce((accamulator, key) => {
        accamulator[camelToSnake(key)] = userData[key];
        return accamulator;
    }, {});
    return instance.put(`user`, userData, {withCredentials: true})
        .then((response) => prettifyMinterIdUser(response.data.data));
}


/**
 * @param {Object} user
 * @return {MinterIdUser}
 */
function prettifyMinterIdUser(user) {
    user.originalContacts = user.contacts || [];
    let contacts = {minter: []};
    user.originalContacts.forEach((contactItem) => {
        if (contactItem.type === 'minter') {
            contacts.minter.push(contactItem);
        } else {
            contacts[snakeToCamel(contactItem.type)] = contactItem.value;
        }
    })
    user.contacts = contacts;
    return user;
}

/**
 * @param {MinterIdUser} user
 * @param {MinterIdUser} [originalUser]
 */
function toOriginalMinterIdUser(user, originalUser) {
    if (!originalUser) {
        originalUser = user;
    }
    let contacts = [];
    Object.keys(user.contacts).forEach((type) => {
        if (type === 'minter') {
            let fixedMinter = user.contacts.minter.slice(0);
            if (originalUser.contacts?.minter) {
                // update contacts according database order (ordered by id)
                originalUser.contacts.minter.forEach((item, index) => {
                    if (fixedMinter[index]) {
                        // replace old item with new
                        fixedMinter[index].id = item.id;
                    } else {
                        // make old item empty to delete it
                        fixedMinter[index] = {name: '', value: '', id: item.id};
                    }
                })
            }
            fixedMinter.forEach((item) => {
                item.type = 'minter';
            })
            contacts = contacts.concat(fixedMinter);
        } else {
            let newOriginalContactItem = {type: camelToSnake(type), value: user.contacts[type] || ''};
            const oldOriginalContactItem = originalUser.originalContacts.find((item) => item.type === camelToSnake(type));
            if (oldOriginalContactItem) {
                newOriginalContactItem.id = oldOriginalContactItem.id;
            }
            contacts.push(newOriginalContactItem);
        }
    });
    let newUser = {
        ...user,
        contacts,
    }
    delete newUser.originalContacts;
    return newUser;
}

/**
 *
 * @param data
 * @param {number} userId
 * @return {Promise<string>}
 */
export function updateProfileAvatar(data, userId) {
    const path = `minter-id/user/${userId}/avatar`
    const fullPath = IMAGE_API_URL + path;
    return instance.get(`access?path=${path}`, {withCredentials: true})
        .then((response) => {
            const accessToken = response.data.data;
            return imageUpload(data, accessToken);
        })
        .then(() => {
            return updateUser({picture: fullPath});
        })
        .then(() => fullPath);
}

/**
 * @typedef {Object} MinterIdUser
 * @property {number} id
 * @property {string} {username}
 * @property {string} name
 * @property {string} email
 * @property {string} country
 * @property {string} language
 * @property {string} [website]
 * @property {string} [about]
 * @property {string} invitation - invite link
 * @property {boolean} isActive
 * @property {boolean} isPublic
 * @property {number} rating
 * @property {number} ratingPosition
 * @property {number} ratingTotal
 * @property {string} [picture] - google avatar
 * @property {string} [locale] - google locale
 * @property {MinterIdUserContactList} contacts
 * @property {Array} originalContacts
 */

/**
 * @typedef {Object} MinterIdUserContactList
 * @property {string} phone
 * @property {string} publicEmail
 * @property {string} socialTwitter
 * @property {string} socialTelegram
 * @property {string} socialFacebook
 * @property {string} socialInstagram
 * @property {string} socialMedium
 * @property {string} socialYoutube
 * @property {string} socialGithub
 * @property {string} socialBehance
 * @property {MinterIdUserContactAddress} minter
 */

/**
 * @typedef {Array<{name: string, value: string}>} MinterIdUserContactAddress
 */

/**
 * @typedef {Object} InvitationData
 * @property {string} name
 * @property {string} type
 */

/**
 * @param {string} username
 * @return {Promise<MinterIdUser>}
 */
export function getUserByUsername(username) {
    return instance.get(`user/${username}`, {withCredentials: true})
        .then((response) => prettifyMinterIdUser(response.data.data));
}



function snakeToCamel(val) {
    const list = val.split('_');
    list.forEach((item, index) => {
        if (index > 0) {
            list[index] = item[0].toUpperCase() + item.substr(1);
        }
    })
    return list.join('');
}

function camelToSnake(val) {
    return val.replace(/([A-Z])/g, '_$1').toLowerCase();
}
