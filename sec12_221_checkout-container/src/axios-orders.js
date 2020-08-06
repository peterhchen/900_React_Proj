import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://react-my-burger.firebaseio.com/'
    baseURL: 'https://react-proj-burger.firebaseio.com/'   
});

export default instance;