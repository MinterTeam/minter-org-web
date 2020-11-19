import axios from 'axios';
import {IMAGE_API_URL} from "~/assets/variables";
import addToCamelInterceptor from '~/assets/to-camel.js';

const instance = axios.create({
    baseURL: IMAGE_API_URL,
});
// plain text error to json
instance.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    error.response.data = {error: {message: error.response.data}};
    return Promise.reject(error);
});
addToCamelInterceptor(instance);

export default instance;

export function upload(image, token) {
    return instance.post('upload', makeFormData({data: image}), {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: "Bearer " + token,
        },
    });
}

/**
 * @param {Object} data
 * @return {FormData}
 */
function makeFormData(data) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
    });

    return formData;
}
