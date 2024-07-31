import axios from "axios";


window.axios = axios;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        // Check your token for validity, and if needed, refresh the token / force re-login etc.
        if (error.response.status == 401 || error.config.method == 'get' && error.response.status == 500) {
            localStorage.clear();
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);
