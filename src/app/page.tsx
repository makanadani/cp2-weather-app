"use client";

import { Header } from './components/Header/Header';
import { useUserContext } from './context/UserContext';

export default function HomePage() {
  const { userName } = useUserContext();

  return (
    <>
      <Header title="Bem-vindo" userName={userName || 'Visitante'} />
      <div>
        <h1>Página Principal</h1>
        <p>Bem-vindo ao nosso site! Aqui está a página principal.</p>
      </div>
    </>
  );
}
