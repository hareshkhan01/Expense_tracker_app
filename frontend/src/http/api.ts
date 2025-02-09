import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        "Content_Type" :'application/json',
    }
})


export const logIn = async (data: {email:String;password:string}) => await
 api.post('/api/users/login',data);

 

