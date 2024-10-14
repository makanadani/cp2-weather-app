"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import UserContext from "../../context/UserContext";
import { Header } from "../../components/Header/Header";

export default function Profile() {
  const { userName, setUserName } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    const storedUserToken = sessionStorage.getItem("userToken");

    if (storedUserToken) {
      try {
        const userToken = JSON.parse(storedUserToken);
        const userData: any = jwtDecode(userToken.token);
        setUserName(userData.name);
      } catch (error) {
        console.error("Erro ao decodificar o token JWT", error);
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  }, [router, setUserName]);

  return (
    <>
      <Header title="Perfil" userName={userName || "Convidado"} />
      <div>
        <h2>Bem-vindo ao seu perfil, {userName || "Convidado"}</h2>
      </div>
    </>
  );
}
