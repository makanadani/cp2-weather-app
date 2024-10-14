"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import UserContext from "../context/UserContext";
import { Header } from "../components/Header/Header";

interface CustomJwtPayload {
  name: string;
}

export default function Profile() {
  const router = useRouter();
  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    const userToken = JSON.parse(sessionStorage.getItem("userToken") || "null");

    if (userToken) {
      const userData = jwtDecode<CustomJwtPayload>(userToken.token);
      setUserName(userData.name);
    } else {
      router.push("/login");
    }
  }, [setUserName, router]);

  return (
    <>
      <Header title="Perfil" userName={userName} />
      <div>
        <h2>Bem-vindo, {userName}</h2>
        <p>Aqui estão suas informações de perfil.</p>
      </div>
    </>
  );
}
