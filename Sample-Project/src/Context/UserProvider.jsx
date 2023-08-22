import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();
// Get user data from local storage
const dataArr = JSON.parse(localStorage.getItem("userData"));

// Create a UserProvider component
const UserProvider = ({ children }) => {
  const [isloading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // Function to get user data from API endpoint
  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        "https://drab-blue-shark-robe.cyclic.app/users"
      );
      const userData = res.data;
      setIsLoading(false);
      setUsers(userData);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <userContext.Provider value={{ users, getData, dataArr, isloading }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
