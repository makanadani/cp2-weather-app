"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import {
  StyledHeader,
  StyledUserData,
  StyledUserDataButton,
} from "./Header.style";

interface HeaderProps {
  title: string;
  userName: string;
}

export const Header = ({ title, userName }: HeaderProps) => {
  const router = useRouter();
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      console.log("Iniciando logout...");

      sessionStorage.removeItem("userToken");
      console.log("Token removido do sessionStorage");

      if (userContext?.setUserName) {
        userContext.setUserName("");
        console.log("Nome de usuário no contexto limpo");
      } else {
        console.error("Erro ao atualizar o contexto do usuário");
      }

      router.push("/login");
      console.log("Redirecionando para a página de login");
    }
  };

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <div>
        {userName && userName !== "Visitante" ? (
          <StyledUserData>
            <span>{userName}</span>
            <StyledUserDataButton onClick={handleLogout}>
              Sair
            </StyledUserDataButton>
          </StyledUserData>
        ) : (
          <StyledUserDataButton onClick={handleLogin}>
            Login
          </StyledUserDataButton>
        )}
      </div>
    </StyledHeader>
  );
};
