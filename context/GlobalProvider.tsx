import { getCurrentUser } from '@/lib/appwrite';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';


interface AuthContextType {
  isLogged: boolean;
  user: User | null;
  loading: boolean;
  setIsLogged: (value: boolean) => void;
  setUser: (user: User | null) => void;
  setLoading: (value: boolean) => void;
}

interface User {

  username: string;
  email: string;
  password:string
}


const GlobalContext = createContext<AuthContextType | undefined>(undefined);


const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCurrentUser()
      .then((res:any) => {
        if (res) {
          setIsLogged(true);
          setUser(res);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const contextValue: AuthContextType = {
    isLogged,
    user,
    loading,
    setIsLogged,
    setUser,
    setLoading
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for consuming the context
const useGlobalContext = (): AuthContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { GlobalProvider, useGlobalContext };
