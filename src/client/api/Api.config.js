/**
 * configuration class for axios
 */
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/'
});

axiosInstance.interceptors.request.use((request) => {
    return request;
}, (error) => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return error;
})

export default axiosInstance;