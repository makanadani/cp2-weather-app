import { useContext } from "react";
import { useRouter } from "next/router";
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
    sessionStorage.removeItem("userToken");
    if (userContext && userContext.setUserName) {
      userContext.setUserName("");
    }
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
