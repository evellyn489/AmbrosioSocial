import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../../services/axios';

interface UserData {
    id: string;
    name: string;
    email: string;
}

interface UserContext {
    userData: UserData | null;   
    setUserData: (userData: UserData | null) => void;   
}

const initialContextValue: UserContext = {
    userData: null,
    setUserData: () => {},
};

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContext>(initialContextValue);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          return;
        }
        const idUser = localStorage.getItem('id');
        const response = await api.get(`/user/${idUser}`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        const { name, id, email } = response.data;
        setUserData({name, id, email});
      } catch (error) {
        console.error('Erro ao obter informações do usuário:', error);
      }
    };
    fetchUserData();
  }, []);

  const contextValue: UserContext = {
    userData,
    setUserData
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};