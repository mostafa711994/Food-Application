import axios from 'axios';


const  instance = axios.create({

    baseURL: 'https://my-burger-e59bc.firebaseio.com/'

});

export default instance;

