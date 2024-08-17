"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

type AuthContextProps = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// type AuthContextType = {
//   user: { id: string; email: string } | null;
//   setUser: (user: { id: string; email: string } | null) => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<{ id: string; email: string } | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
//       setUser(userInfo);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
