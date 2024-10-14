import { useUserContext } from "../context/UserContext";

export const verifyLogin = () => {
  const { setUserName } = useUserContext();

  if (typeof window !== "undefined") {
    const sessionData = sessionStorage.getItem("userToken");
    if (sessionData) {
      try {
        const userData = JSON.parse(sessionData);
        setUserName(userData.name);
      } catch (error) {
        console.error("Erro ao decodificar o token", error);
      }
    }
  }
};
