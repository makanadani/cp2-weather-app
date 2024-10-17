"use client"; // Marcar como Client Component

import { useState } from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

interface City {
  id: number;
  nome: string;
  estado: string;
}

export default function SearchPage() {
  const [cityName, setCityName] = useState<string>("");
  const [cityList, setCityList] = useState<City[]>([]);

  const handleSearch = async () => {
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
      setCityList(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <div>
      <Header title="Busca" userName="Visitante" />
      <Input
        id="search"
        name="search"
        label="Buscar Cidade"
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <Button type="button" onClick={handleSearch}>
        Buscar
      </Button>
      <ul>
        {cityList.map((city) => (
          <li key={city.id}>
            {city.nome} / {city.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}
