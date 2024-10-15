"use client";

import { useContext } from "react";
import { Header } from "../components/Header/Header";
import UserContext from "../context/UserContext";
import { useVerifyLogin } from "../utils/useVerifyLogin";

export default function Favorites() {
  useVerifyLogin();
  const { userName } = useContext(UserContext);

  return (
    <>
      <Header title="Favoritos" userName={userName} />
    </>
  );
}
