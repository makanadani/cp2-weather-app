import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

interface JwtPayload {
  name: string;
}

export default function ProfilePage() {
  const cookieStore = cookies();
  const userToken = cookieStore.get("userToken")?.value;

  if (!userToken) {
    redirect("/login");
  }

  const decodedToken = jwtDecode<JwtPayload>(userToken);

  return (
    <div>
      <h1>Perfil do usuário: {decodedToken.name}</h1>
    </div>
  );
}
