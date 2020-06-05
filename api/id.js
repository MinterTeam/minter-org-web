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
            return response.data.data;
        })
}

/**
 *
 * @param {string} invitation
 * @param {string} id_token
 * @return {Promise<MinterIdUser>}
 */
export function authLogin({invitation, id_token}) {
    return instance.post(`auth/google`, {
            id_token,
        })
        // .then((response) => {
        //     setAuthToken(response.data);
        //     return getUser();
        // })
        // .then((user) => {
        //     return user;
        // })
}

/**
 *
 * @return {Promise<MinterIdUser>}
 */
export function getUser() {
    return instance.get(`user`, {withCredentials: true})
        .then((response) => response.data.data);
}

/**
 * @param {MinterIdUser} user
 * @return {Promise<AxiosResponse<T>>}
 */
export function updateUser(user) {
    return instance.put(`user`, user, {withCredentials: true})
        .then((response) => response.data.data);
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
 * @property {string} username
 * @property {string} name
 * @property {string} email
 * @property {string} country
 * @property {string} language
 * @property {string} [website]
 * @property {string} [about]
 * @property {string} invitation - invite link
 * @property {boolean} isActive
 * @property {number} rating
 * @property {number} ratingPosition
 * @property {number} ratingTotal
 * @property {string} [picture] - google avatar
 * @property {string} [locale] - google locale
 */

/**
 * @typedef {Object} InvitationData
 * @property {string} name
 * @property {string} type
 */
