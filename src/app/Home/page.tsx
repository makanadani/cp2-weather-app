"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUserContext } from "../context/UserContext";
import { Header } from "../components/Header/Header";
import { verifyLogin } from "../utils/verifyLogin";

interface CityWeather {
  cidade: string;
  estado: string;
  clima: {
    min: number;
    max: number;
    condicao_desc: string;
  }[];
}

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userName } = useUserContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityData, setCityData] = useState<CityWeather | null>(null);

  const loadCity = async (cityCode: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}`
      );
      const data: CityWeather = await response.json();
      setCityData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cityCodeParam = searchParams.get("cityCode");
    const cityCode = cityCodeParam ? Number(cityCodeParam) : 244;
    loadCity(cityCode);
  }, [searchParams]);

  useEffect(() => {
    if (!userName) {
      verifyLogin();
    }
  }, [userName]);

  return (
    <>
      <Header title="Inicio" userName={userName || "Convidado"} />

      <div>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <div>
            <h2>
              {cityData?.cidade}/{cityData?.estado}
            </h2>
            <p>
              Min<span>{cityData?.clima[0].min}</span>/ Max
              <span>{cityData?.clima[0].max}</span>
            </p>
            <p>{cityData?.clima[0].condicao_desc}</p>
          </div>
        )}
      </div>
    </>
  );
}
