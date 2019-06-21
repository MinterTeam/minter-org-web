export default function({app, store, route, redirect, error}) {
    if (process.server) {
        return;
    }
    console.log('CHECK VISION');
    console.log('-- route', route);
    console.log('-- path', route.path);

    const urlAllow = [
        /^\/vision(\/|$)/,
        /^\/foundation(\/|$)/,
    ].some((pathRegex) => {
        return pathRegex.test(route.path);
    });

    if (!urlAllow) {
        console.log('-- restricted: redirect to vision');
        return redirect('/vision');
    }

    console.log('-- not restricted');
    return Promise.resolve();
}
