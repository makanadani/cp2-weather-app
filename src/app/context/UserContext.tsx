"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | null>(null);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userName, setUserName] = useState<string>("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export default UserContext;
