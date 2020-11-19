import profileMiddleware, {getUrlShouldCheckUser} from '~/middleware/profile.js';

let isInit = false;
export default function(context) {
    if (isInit) {
        return;
    }
    isInit = true;
    const staticRoutes = context.app.router.options.routes.filter((item) => item.path.indexOf('/:') === -1);
    const isStaticRoute = staticRoutes.find((item) => item.name === context.route.name);
    const urlShouldCheckUser = getUrlShouldCheckUser(context.route);
    if (urlShouldCheckUser && isStaticRoute) {
        profileMiddleware(context);
    }
}
