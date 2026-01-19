import { createContext, useContext, useState, useEffect } from "react";

type User = {
  name: string;
  role: string;
};

type AuthContextData = {
  user: User | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<User | null>(() => {
  const storedUser = localStorage.getItem("auth:user");

    return storedUser ? JSON.parse(storedUser) : null;
  });


  // useEffect(() => {
  //   const storedUser = localStorage.getItem("auth:user");

  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);


  const isAuthenticated = !!user;

  function login() {
    const fakeUser = {
      name: "Kayo Dev",
      role: "Administrador",
    };

    setUser(fakeUser);
    localStorage.setItem("auth:user", JSON.stringify(fakeUser));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("auth:user");
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
