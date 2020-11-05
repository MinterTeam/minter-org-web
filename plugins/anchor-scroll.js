// fix chrome and safari scroll to anchor on load
if (window.location.hash.length > 1) {
    waitCondition(() => {
        // not loading
        return !document.getElementById('nuxt-loading');
    })
        .then(() => {
            const target = document.getElementById(window.location.hash.substr(1));
            if (target) {
                target.scrollIntoView(true);
            }
        });
}

/**
 * @param {function(): boolean} condition
 * @return {Promise}
 */
function waitCondition(condition) {
    return new Promise((resolve) => {
        waitConditionThenCallback(condition, resolve);
    });
}

/**
 * @param {function(): boolean} condition
 * @param {Function} callback
 */
function waitConditionThenCallback(condition, callback) {
    if (condition()) {
        callback();
        return;
    }

    setTimeout(() => {
        waitConditionThenCallback(condition, callback)
    }, 100);
}
