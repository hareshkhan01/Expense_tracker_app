import axios from 'axios'
import exp from 'constants';

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        "Content-Type" :'application/json',
    }
})



export const logIn = async (data: {email:String;password:string}) => await
 api.post('/api/users/login',data);

 export const createUser = async (data: {name:string;email:String;password:string}) => await
 api.post('/api/users/register',data);

 export const getAllExpenses = async () => await api.get('/api/allexpenses');

