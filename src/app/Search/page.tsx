"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import UserContext from "../context/UserContext";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

export default function Search() {
  const { userName } = useContext(UserContext);
  const router = useRouter();
  const [cityName, setCityName] = useState<string>("");
  const [cityList, setCityList] = useState<any[]>([]);

  const handleSearch = async () => {
    console.log("handleSearch chamado");
    if (!cityName) {
      alert("Por favor, insira o nome de uma cidade.");
      return;
    }
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar dados da cidade");
      }
      const data = await response.json();
      console.log("Dados recebidos:", data);
      setCityList(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleNavigate = (cityCode: number) => {
    console.log("Navegando para a cidade com código:", cityCode);
    router.push(`/?cityCode=${cityCode}`);
  };

  return (
    <div>
      <Header title="Busca" userName={userName || "Visitante"} />
      <Input
        id="search"
        name="search"
        label="Buscar Cidade"
        type="text"
        onChange={(e) => {
          console.log("Valor do input:", e.target.value);
          setCityName(e.target.value);
        }}
      />
      <Button
        type="button"
        onClick={() => {
          console.log("Botão buscar clicado");
          handleSearch();
        }}
      >
        Buscar
      </Button>
      <ul>
        {cityList.map((city) => (
          <li key={city.id} onClick={() => handleNavigate(city.id)}>
            {city.nome} / {city.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}
