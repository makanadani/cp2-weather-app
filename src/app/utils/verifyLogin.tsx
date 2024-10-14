"use client";

import { jwtDecode, JwtPayload } from "jwt-decode";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

interface DecodedToken extends JwtPayload {
  name: string;
}

export const VerifyLogin = () => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    const sessionData = sessionStorage.getItem("userToken");
    if (sessionData && userContext) {
      try {
        const userData = jwtDecode<DecodedToken>(sessionData);
        if (userData.name) {
          userContext.setUserName(userData.name);
        } else {
          console.error("O token não contém o nome do usuário.");
        }
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
      }
    }
  }, [userContext]);
  return null;
};
