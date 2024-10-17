"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import UserContext from "../context/UserContext";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function Login() {
  const userContext = useContext(UserContext);
  const router = useRouter();

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSendLogin = async () => {
    if (!login || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        throw new Error("Erro na autenticação. Verifique suas credenciais.");
      }

      const data = await response.json();

      if (data && data.token) {
        sessionStorage.setItem("userToken", JSON.stringify(data));

        if (userContext && userContext.setUserName) {
          userContext.setUserName(data.name);
        } else {
          console.error("UserContext não está disponível.");
        }

        router.push("/profile");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendLogin();
        }}
      >
        <Input
          type="text"
          id="login"
          name="login"
          label="Login"
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Digite seu email"
        />

        <Input
          label="Senha"
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
        >
          Login
        </Button>
      </form>
    </>
  );
}
