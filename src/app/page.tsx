"use client";

import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { useUserContext } from './context/UserContext';
import { verifyLogin } from './utils/verifyLogin';

export default function HomePage() {
  const { userName, setUserName } = useUserContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const sessionData = sessionStorage.getItem("userToken");
    if (sessionData) {
      try {
        const userData = JSON.parse(sessionData);
        setUserName(userData.name);
      } catch (error) {
        console.error("Erro ao decodificar o token", error);
      }
    } else {
      verifyLogin();
    }
    setIsLoading(false);
  }, [setUserName]);

  return (
    <div>
      <Header title="Página Inicial" userName={userName || 'Visitante'} />
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <p>Bem-vindo, {userName}!</p>
      )}
    </div>
  );
}
