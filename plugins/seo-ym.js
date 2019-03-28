export default function({ app }) {
    /*
    ** Only run on client-side and only in production mode
    */
    if (process.env.NODE_ENV !== 'production') {
        return;
    }

    (window["yandex_metrika_callbacks2"] = window["yandex_metrika_callbacks2"] || []).push(function() {
        try {
            window.yaCounter53012509 = new Ya.Metrika2({
                id: 53012509,
                clickmap: false,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: false,
            });
        } catch (e) {}
    });

    /*
    ** Include script
    */
    let script = document.createElement('script');
    script.async = true;
    script.src = 'https://mc.yandex.ru/metrika/tag.js';
    document.body.appendChild(script);

    /*
    ** Every time the route changes (fired on initialization too)
    */
    app.router.afterEach((to, from) => {
        if(typeof window.yaCounter53012509 === 'object') {
            window.yaCounter53012509.hit(to.fullPath);
        }
    });
}
