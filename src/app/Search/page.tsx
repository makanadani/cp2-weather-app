"use client"

import { useState } from "react";
import Link from "next/link";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export default function Search() {
  const router = useRouter();
  const [cityName, setCityName] = useState<string>("");
  const [cityList, setCityList] = useState<any[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
      );
      const data = await response.json();
      setCityList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigate = (cityCode: number) => {
    router.push(`/?cityCode=${cityCode}`);
  };

  return (
    <div>
      <Header title="Busca" userName="Visitante" />
      <Input
        id="search"
        name="search"
        label="Buscar cidade"
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <Button type="button" onClick={handleSearch}>
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
