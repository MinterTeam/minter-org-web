import axios from 'axios';
import stripZeros from 'pretty-num/src/strip-zeros';
import {EXPLORER_API_URL, COIN_NAME} from "~/assets/variables";
import addToCamelInterceptor from '~/assets/to-camel.js';

const instance = axios.create({
    baseURL: EXPLORER_API_URL,
});
addToCamelInterceptor(instance);


export function getBipPrice() {
    return instance.get('status')
        .then((response) => response.data.data.bipPriceUsd);
}

/**
 *
 * @param {string} address
 * @return {Promise<BalanceData>}
 */
export function getBalance(address) {
    return instance.get(`addresses/${address}?withSum=true`)
        .then((response) => {
            const data = response.data.data;
            data.balances = prepareBalance(data.balances);
            return data;
        });
}

export function prepareBalance(balanceList) {
    return balanceList.sort((a, b) => {
            // set base coin first
            if (a.coin === COIN_NAME) {
                return -1;
            } else if (b.coin === COIN_NAME) {
                return 1;
            } else {
                return 0;
                // sort by name, instead of reserve
                // return a.coin.localeCompare(b.coin);
            }
        })
        .map((coinItem) => {
            return {
                ...coinItem,
                amount: stripZeros(coinItem.amount),
            };
        });
}

/**
 * @typedef {Object} BalanceData
 * @property {string} totalBalanceSum
 * @property {string} totalBalanceSumUsd
 * @property {Array<CoinItem>} balances
 */

/**
 * @typedef {Object} CoinItem
 * @property {string|number} amount
 * @property {string} coin
 */

/**
 * @param {string} address
 * @return {Promise}
 */
export function getAddressStakeList(address) {
    return instance.get(`addresses/${address}/delegations`)
        .then((response) => response.data);
}



/**
 * @typedef {Object} StakeItem
 * @property {string} [pubKey]
 * @property {ValidatorMeta} [validatorMeta]
 * @property {string} [address]
 * @property {string|number} value
 * @property {string|number} bipValue
 * @property {string} coin
 */

/**
 * @typedef {Object} ValidatorMeta
 * @property {string} name
 * @property {string} description
 * @property {string} iconUrl
 * @property {string} siteUrl
 */
