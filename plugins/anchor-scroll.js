// fix chrome and safari scroll to anchor on load
if (window.location.hash.length > 1) {
    const target = document.getElementById(window.location.hash.substr(1));
    if (target) {
        target.scrollIntoView(true);
    }
}
