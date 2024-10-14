"use client";

import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "../../UserContext";
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
  const { setUserName } = useContext(UserContext) || {};

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userToken");
    setUserName?.("");
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
