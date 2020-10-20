const GTAG_ID = 'UA-110383571-4';
const YM_ID = 49878307;


export default ({ app }) => {
    /*
    ** Only run on client-side and only in production mode
    */
    if (process.env.NODE_ENV !== 'production') {
        return;
    }

    gtagLoad(getConsentStatus('ga'));
    ymLoad();
    if (getConsentStatus('ym')) {
        ymInit();
    }

    app.router.afterEach((to, from) => {
        // We tell Google Analytics to add a `pageview`
        window['dataLayer'].push({ event: 'nuxtRoute', pageType: 'PageView', pageUrl: to.fullPath, routeName: to.name });
    });
};


/**
 * @param {Object} options
 * @param {boolean} options.ym
 * @param {boolean} options.ga
 */
export function grantConsent({ym, ga}) {
    saveConsentStatus('ga', ga);
    saveConsentStatus('ym', ym);

    updateGaConsent(false, ga);
    if (ym) {
        ymInit();
    }
}

function gtagLoad(isConsentGranted) {
    window['dataLayer'] = window['dataLayer'] || [];

    // Default consent mode is "denied" for both ads and analytics, but delay for 2 seconds until the Cookie Solution is loaded
    gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
        // wait_for_update: 60000 // milliseconds
    });
    // Further redact your ads data (without this optional line, some cookies may be installed @see https://www.iubenda.com/en/help/27137-google-consent-mode)
    gtag("set", "ads_data_redaction", true);

    // init
    gtag('js', new Date());
    gtag('config', GTAG_ID);


    /*
    ** Include Script
    */
    let script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GTAG_ID;
    document.body.appendChild(script);
}

function gtag() {
    window.dataLayer.push(arguments);
}

function updateGaConsent(ad_storage, analytics_storage) {
    gtag("consent", "update", {
        ad_storage: ad_storage ? "granted" : "denied",
        analytics_storage: analytics_storage ? "granted" : "denied"
    });
}


function ymLoad() {
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
}

let isYmInit = false;
function ymInit() {
    if (isYmInit) {
        return;
    }
    isYmInit = true;
    window.ym(YM_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
    });
}

/**
 *
 * @param {string} item
 * @return {boolean}
 */
function getConsentStatus(item) {
    return !!window.localStorage.getItem(`consent-status-${item}`);
}

/**
 *
 * @param {string} item
 * @param {boolean} value
 */
function saveConsentStatus(item, value) {
    if (value) {
        window.localStorage.setItem(`consent-status-${item}`, 'granted');
    } else {
        window.localStorage.removeItem(`consent-status-${item}`);
    }
}
