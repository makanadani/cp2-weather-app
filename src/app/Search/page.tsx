"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { Header } from "../components/Header/Header";
import { useUserContext } from "../UserContext";

interface City {
  id: number;
  nome: string;
  estado: string;
}

export default function Search() {
  const { userName } = useUserContext();
  const router = useRouter();

  const [cityName, setCityName] = useState<string>("");
  const [cityList, setCityList] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const loadCities = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
      );

      const data: City[] = await response.json();
      setCityList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    loadCities();
  };

  const handleNavigate = (cityCode: number) => {
    router.push({
      pathname: "/",
      query: { cityCode: cityCode.toString() },
    });
  };

  return (
    <>
      <Header title="Busca" userName={userName || "Convidado"} />
      <form>
        <Input
          label="Buscar cidade"
          id="search"
          name="search"
          type="text"
          onChange={handleChange}
        />
        <Button type="button" onClick={handleClick}>
          Buscar
        </Button>
      </form>

      <div>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {cityList.map((city) => (
              <li key={city.id} onClick={() => handleNavigate(city.id)}>
                {city.nome} / {city.estado}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
