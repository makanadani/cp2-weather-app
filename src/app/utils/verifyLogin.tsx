"use client";

import { useContext, useEffect } from "react";
import { useUserContext } from "../context/UserContext";

export const VerifyLogin = () => {
  const { setUserName } = useUserContext();

  useEffect(() => {
    const sessionData = sessionStorage.getItem("userToken");
    if (sessionData) {
      try {
        const userData = JSON.parse(sessionData);
        setUserName(userData.name);
      } catch (error) {
        console.error("Erro ao decodificar o token", error);
      }
    }
  }, [setUserName]);

  return null;
};
