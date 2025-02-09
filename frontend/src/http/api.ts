import axios from 'axios'
import exp from 'constants';
import useTokenStore from '../store';


import  useTokenStore  from '../store'
const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        "Content-Type" :'application/json',
    }
})

api.interceptors.request.use((config) => {
    const token = useTokenStore.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export const logIn = async (data: {email:String;password:string}) => await
 api.post('/api/users/login',data);

 export const createUser = async (data: {name:string;email:String;password:string}) => await
 api.post('/api/users/register',data);

 export const getAllExpenses = async () => await api.get('/api/allexpenses');

=======

export const logIn =async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/login",
      userData,
      { headers: { "Content-Type": "application/json" } } // 👈 Ensure correct headers
    );
    return response.data;
  } catch (error) {
    console.error("Axios error:", error.response?.data || error.message); // 👀 Logs real error
    throw error;
  }
};

 
export const register = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        userData,
        { headers: { "Content-Type": "application/json" } } // 👈 Ensure correct headers
      );
      return response.data;
    } catch (error) {
      console.error("Axios error:", error.response?.data || error.message); // 👀 Logs real error
      throw error;
    }
  };


  export const fetchExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/allexpenses", {
        headers: {
          Authorization: `bearer ${useTokenStore.getState().token}`, // ✅ Include token if required
        },
      });
      return (response.data as { expenses: any[] }).expenses; // ✅ Returns expenses array
    } catch (error) {
      console.error("Error fetching expenses:", error.response?.data || error.message);
      throw error;
    }
  };
  
  
  
