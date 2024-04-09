import axios from 'axios';

export default axios.create({
    baseURL: 'https://96af-2603-6010-c600-1d2e-ce3-f949-1732-c0d9.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});

// import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:8080',
//     // Remove the ngrok-skip-browser-warning header
// });

// export default axiosInstance;
