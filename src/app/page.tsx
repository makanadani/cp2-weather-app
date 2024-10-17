"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";

export default function Home() {
  const router = useRouter();
  const [cityName, setCityName] = useState<string>("");
  const [cityList, setCityList] = useState<any[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar dados da cidade.");
      }
      const data = await response.json();
      setCityList(data);
    } catch (error) {
      console.error("Erro ao buscar a cidade:", error);
    }
  };

  const handleNavigate = (cityCode: number) => {
    router.push(`/?cityCode=${cityCode}`);
  };

  return (
    <div>
      <Header title="Início" userName="Visitante" />
      <h1>Bem-vindo ao Weather App</h1>
      <Input
        id="search"
        name="search"
        label="Buscar Cidade"
        type="text"
        onChange={(e) => setCityName(e.target.value)} value={""} 
        />
      <Button type="button" onClick={handleSearch}>
        Buscar
      </Button>
      <ul>
        {cityList.length > 0 ? (
          cityList.map((city) => (
            <li key={city.id} onClick={() => handleNavigate(city.id)}>
              {city.nome} / {city.estado}
            </li>
          ))
        ) : (
          <p>Nenhuma cidade encontrada.</p>
        )}
      </ul>
    </div>
  );
}
