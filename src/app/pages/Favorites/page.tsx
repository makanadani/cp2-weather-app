"use client";

import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import UserContext from "../../context/UserContext";

export default function Favorites() {
  const { userName } = useContext(UserContext) || {};
  return (
    <>
      <Header title="Favoritos" userName={userName || ""} />
      <div>
        <h2>Seus itens favoritos aparecerão aqui.</h2>
      </div>
    </>
  );
}
