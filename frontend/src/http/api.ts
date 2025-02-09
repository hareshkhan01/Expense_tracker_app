import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        "Content_Type" :'application/json',
    }
})


export const logIn = async (data: {email:String;password:string}) => await
 api.post('/api/users/login',data);

 
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
  
  