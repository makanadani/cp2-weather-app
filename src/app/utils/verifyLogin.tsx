import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  name: string;
}

export const verifyLogin = () => {
  const cookieStore = cookies();
  const sessionData = cookieStore.get("userToken")?.value;

  if (sessionData) {
    try {
      const decoded = jwt.verify(sessionData, "your-secret-key") as CustomJwtPayload;
      return decoded.name;
    } catch (error) {
      console.error("Erro ao verificar o token:", error);
      return null;
    }
  }
  return null;
};
