import axios from 'axios'
import  useTokenStore  from '../store'
const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        "Content_Type" :'application/json',
    }
})


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
  
  
  