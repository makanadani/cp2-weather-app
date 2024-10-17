"use client";

import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import UserContext from "../../context/UserContext";

export default function Favorites() {
  const userContext = useContext(UserContext);
  const userName = userContext ? userContext.userName : "Visitante";

  return (
    <>
      <Header title="Favoritos" userName={userName} />
      <div>
        <h2>Meus Favoritos</h2>
        <p>Aqui você verá a sua lista de favoritos.</p>
      </div>
    </>
  );
}
