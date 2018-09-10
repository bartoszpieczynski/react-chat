import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-chat-8f8af.firebaseio.com/'
});

export default instance;