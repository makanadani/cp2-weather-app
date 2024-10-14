"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import { useUserContext } from "../context/UserContext";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";

export default function Login() {
  const { setUserName } = useUserContext();
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSendLogin = async (params: { login: string; password: string }) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      if (data && data.token) {
        sessionStorage.setItem("userToken", JSON.stringify(data));
        const userData: any = jwtDecode(data.token);
        setUserName(userData.name);
        router.push("/perfil");
      } else {
        console.error("Erro no login, token não encontrado!");
      }
    } catch (error) {
      console.log("Erro ao fazer login.", error);
    } finally {
      console.log("Finalizado o processo de login!");
    }
  };

  const handleClick = () => {
    const params = {
      login: login,
      password: password,
    };

    handleSendLogin(params);
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <Input
          type="text"
          id="login"
          name="login"
          label="Login"
          onChange={handleLogin}
          placeholder="Digite seu e-mail"
        />

        <Input
          label="Senha"
          type="password"
          id="password"
          name="password"
          onChange={handlePassword}
        />
        
        <Button type="button" onClick={handleClick}>
          Login
        </Button>
      </form>
    </>
  );
}
