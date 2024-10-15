"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Button } from "../components/Button/Button";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import UserContext from "../context/UserContext";
import { useVerifyLogin } from "../utils/useVerifyLogin";

export default function Search() {
  useVerifyLogin();
  const router = useRouter();
  const { userName } = useContext(UserContext);
  const [cityName, setCityName] = useState<string>("");
  const [cityList, setCityList] = useState<any[]>([]);
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

      const data = await response.json();
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
    const state = {
      cityCode: cityCode,
    };

    navigate("/", { state });
  };

  return (
    <>
      <Header title="Busca" userName={userName} />
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
          <p>Carregando</p>
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

