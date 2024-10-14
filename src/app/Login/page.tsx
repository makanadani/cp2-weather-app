"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import UserContext from "../context/UserContext";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";

interface UserData {
  name: string;
}

export default function Login() {
  const userContext = useContext(UserContext);
  const router = useRouter();

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSendLogin = async (params: { login: string; password: string }) => {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      if (data && data.token) {
        sessionStorage.setItem("userToken", JSON.stringify(data));
        const userData: UserData = jwtDecode(data.token);

        if (userContext && userContext.setUserName) {
          userContext.setUserName(userData.name);
        }

        router.push("/profile");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      console.log("finally");
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
          placeholder="Digite seu email"
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
