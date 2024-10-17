import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { Header } from "../components/Header";

interface CustomJwtPayload {
  name: string;
}

export default function Profile() {
  const cookieStore = cookies();
  const userToken = cookieStore.get("userToken")?.value;

  let userName = "Visitante";

  if (userToken) {
    try {
      const decoded = jwt.verify(userToken, "your-secret-key") as CustomJwtPayload;
      userName = decoded.name;
    } catch (error) {
      console.error("Token inválido ou expirado:", error);
    }
  }

  return (
    <>
      <Header title="Perfil" userName={userName} />
      <div>
        <h2>Bem-vindo, {userName}</h2>
        <p>Aqui estão suas informações de perfil.</p>
      </div>
    </>
  );
}
