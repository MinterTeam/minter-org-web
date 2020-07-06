import Big from 'big.js';
import prettyNum, {PRECISION_SETTING} from 'pretty-num';
import fromExponential from 'from-exponential';
import stripZeros from 'pretty-num/src/strip-zeros';
import decode from 'entity-decode';

// support
export let support = {};
support.passiveListener = (function() {
    let supportsPassive = false;
    try {
        let opts = Object.defineProperty({}, 'passive', {
            /* eslint-disable-next-line getter-return */
            get: function() {
                supportsPassive = true;
            },
        });
        window.addEventListener('testPassiveListener', null, opts);
    } catch (e) {}
    return supportsPassive;
})();


/**
 * Ensure value to have from 2 to 8 decimal digits
 * @param {string|number} value
 * @return {string}
 */
export function prettyPrecise(value) {
    const parts = stripZeros(fromExponential(value)).split('.');
    const isReduced = parts[1] && parts[1].length > 2;
    if (isReduced) {
        return decode(prettyNum(value, {precision: 8, precisionSetting: PRECISION_SETTING.REDUCE, thousandsSeparator: '&#x202F;'}));
    } else {
        // ensure at least 2 decimal digits
        return decode(prettyNum(value, {precision: 2, precisionSetting: PRECISION_SETTING.FIXED, thousandsSeparator: '&#x202F;'}));
    }
}


/**
 * Make function to accept imask values
 * @param {string} propName
 * @param {boolean} [isAcceptUnmasked]
 * @return {Function}
 */
export function makeAccepter(propName, isAcceptUnmasked) {
    return function(e) {
        this.form[propName] = isAcceptUnmasked ? e.detail._unmaskedValue : e.detail._value;
    };
}


/**
 * @param {number,string,Big} num
 * @param {number} power
 * @return {string}
 */
export function convertFromPower(num, power) {
    const pow = new Big(10).pow(power);

    return new Big(num).div(pow).toFixed();
}
