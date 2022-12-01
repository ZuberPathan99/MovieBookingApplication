import axios from 'axios';
import { TIMEOUT, API_BASE_URL } from "../Config/config";

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: TIMEOUT
})
