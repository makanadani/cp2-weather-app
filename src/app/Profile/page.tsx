"use client";

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { Header } from "../components/Header/Header";
import UserContext from "../context/UserContext";
import { useVerifyLogin } from "../utils/useVerifyLogin";

export default function Profile() {
  useVerifyLogin();
  const router = useRouter();
  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    const userToken = JSON.parse(sessionStorage.getItem("userToken") || "null");

    if (userToken) {
      const userData = jwtDecode(userToken.token);
      setUserName(userData.name);
    } else {
      router.push("/login");
    }
  }, [setUserName, router]);

  return (
    <>
      <Header title="Perfil" userName={userName} />
    </>
  );
}
