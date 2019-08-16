import axios from 'axios';

const request = axios.create({
    baseURL: 'http://10.104.236.98:5000/api',
    headers: {
        'content-type': 'application/json'
    }
});


export const registerUser = async (userData) => {
   return request.post('/users/add', userData).then(res => res.data).catch((res) => {
      return null
   });
};

export const login = async (loginData) => {
    return request.post('/auth' , loginData).then(res => res.data).catch(res => null)
};