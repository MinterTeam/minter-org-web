import profileMiddleware from '~/middleware/profile.js';

let isInit = false;
export default function (context) {
    if (isInit) {
        return;
    }
    isInit = true;
    if (context.route.name === 'index') {
        profileMiddleware(context);
    }
}
