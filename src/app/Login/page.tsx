"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import UserContext from "../context/UserContext";


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

  const handleSendLogin = async (params: object) => {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      if (data) {
        sessionStorage.setItem("userToken", JSON.stringify(data));
        const userData = jwtDecode(data.token);
        setUserName(userData.name);

        navigate("/perfil");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      console.log("finnaly");
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
          placeholder="Digite seu e-mail"
        />

        <Input
          label="Senha"
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={handleClick}>
          Login
        </Button>
      </form>
    </>
  );
}


