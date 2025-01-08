import axios from "axios";

const baseURL = 'https://trigger.uno/index';

const instance = axios.create({
    baseURL,
    timeout: 10000
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // token
        return config;
    },
    (err) => Promise.reject(err)
);

// 响应拦截器
instance.interceptors.response.use(
    (res) => {
        if (res.status === 200) {
            return res.data;
        }
        // failed
        return Promise.reject(res.data);
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;
export { baseURL }
