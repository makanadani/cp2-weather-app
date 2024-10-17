import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Header } from "../components/Header/Header";

interface CityWeather {
  cidade: string;
  estado: string;
  clima: {
    min: number;
    max: number;
    condicao_desc: string;
  }[];
}

interface HomeProps {
  userName: string;
  cityData: CityWeather;
  isLoading: boolean;
}

export default async function Home({ searchParams }: { searchParams: { cityCode?: string } }) {
  const cookieStore = cookies();
  const userToken = cookieStore.get("userToken")?.value;

  let userName = "Convidado";
  if (userToken) {
    userName = "Usuário Autenticado";
  } else {
    redirect("/login");
  }

  const cityCode = searchParams.cityCode ? Number(searchParams.cityCode) : 244;

  let cityData: CityWeather | null = null;
  let isLoading = true;

  try {
    const response = await fetch(
      `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}`
    );
    if (response.ok) {
      cityData = await response.json();
    }
  } catch (error) {
    console.error("Erro ao buscar dados da cidade:", error);
  } finally {
    isLoading = false;
  }

  return (
    <>
      <Header title="Início" userName={userName} />
      <div>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <div>
            <h2>
              {cityData?.cidade}/{cityData?.estado}
            </h2>
            <p>
              Min<span>{cityData?.clima[0].min}</span> / Max
              <span>{cityData?.clima[0].max}</span>
            </p>
            <p>{cityData?.clima[0].condicao_desc}</p>
          </div>
        )}
      </div>
    </>
  );
}
