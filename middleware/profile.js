import {hasAuthToken} from "~/api/id";
// import {getUrlRequiresAuth} from '~/middleware/auth.js';

export default function({app, store, route, redirect, error}) {
    if (process.server) {
        return Promise.resolve();
    }

    const urlShouldCheckUser = getUrlShouldCheckUser(route);

    // const urlRequiresAuth = getUrlRequiresAuth(route.path);

    if (hasAuthToken() && urlShouldCheckUser) {
        // wait for profile, bc its data need for all pages
        return store.dispatch('FETCH_PROFILE')
            .catch((resError) => {
                // Unauthorized: logout bc. auth data is not approved by server
                console.log(resError, resError.response);
                if (resError.response && resError.response.status === 401) {
                    store.commit('LOGOUT');
                    // redirect('/');
                    if (/*urlRequiresAuth*/ false) {
                        return error({title: 'Session expired', description: 'Please sign in again'})
                    }
                } else {
                    return error(resError);
                }
            });
    }

    return Promise.resolve();
}

export function getUrlShouldCheckUser(route) {
    const urlShouldNotCheckUser = [
        /^\/foundation/,
    ].some((pathRegex) => {
        return pathRegex.test(route.path);
    });
    return !urlShouldNotCheckUser;
}
