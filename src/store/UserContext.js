// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlant, setCurrentPlant] = useState()

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, isModalOpen, setIsModalOpen, signOut, currentPlant, setCurrentPlant }}>
      {children}
    </UserContext.Provider>
  );
};
