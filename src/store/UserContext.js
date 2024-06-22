// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isModalOpen, setIsModalOpen }}>
      {children}
    </UserContext.Provider>
  );
};