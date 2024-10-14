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
      sessionStorage.removeItem("userToken");
      if (userContext?.setUserName) {
        userContext.setUserName("");
      }
      router.push("/login");
    }
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
