import axios from 'axios';
import {BIP_CONVERT_API_URL} from "~/assets/variables";
import {convertFromPower} from '~/assets/utils';

const instance = axios.create({
    baseURL: BIP_CONVERT_API_URL,
});

export default instance;

const decimalDigits = 4;


/**
 * @typedef {Object} PriceData
 * @property {number} price - average price of selling last 1BTC
 * @property {number} sell_price
 * @property {number} btc_price
 * @property {number} min_price - min sell price
 * @property {number} max_price - max sell price
 * @property {number} delta - price delta
 * @property {number} sell_price_delta - sell_price delta
 * @property {timestamp|string} next_update
 */

/**
 *
 * @return {Promise<PriceData>}
 */
export function getBipPrice() {
    return instance.get('price')
        .then((response) => {
            return convertFromPower(response.data.data.sell_price, decimalDigits);
        });
}
