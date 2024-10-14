"use client";

import { Header } from "./components/Header/Header";
import { useContext } from "react";
import UserContext from "./context/UserContext";

export default function Home() {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <Header title="Bem-vindo" userName={userName || "Guest"} />
      <h2>Home Page</h2>
      <p>Bem-vindo ao Next Weather App!</p>
    </div>
  );
}
