"use client";

import { useContext } from "react";
import Link from "next/link";
import UserContext from "../../context/UserContext";
import {
  StyledHeader,
  StyledUserData,
  StyledUserDataButton,
} from "./Header.style";

interface HeaderProps {
  title: string;
  userName?: string;
}

export const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  const userContext = useContext(UserContext);

  if (!userContext) {
    return <div>Erro: Contexto não encontrado.</div>;
  }

  const { userName, setUserName } = userContext;

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUserName("");
    router.push("/login");
  };

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <div>
        {userName ? (
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
