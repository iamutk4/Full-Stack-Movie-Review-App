import axios from 'axios';

export default axios.create({
    // baseURL: 'https://77d6-2620-0-1a10-7801-25a6-cfed-671c-103e.ngrok-free.app',
    baseURL: 'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});

// import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:8080',
//     // Remove the ngrok-skip-browser-warning header
// });

// export default axiosInstance;
