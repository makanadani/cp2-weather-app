import { GetServerSideProps } from "next";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

interface City {
  id: number;
  nome: string;
  estado: string;
}

interface SearchProps {
  userName: string;
  cityList: City[];
  cityName: string;
}

export default function Search({ userName, cityList, cityName }: SearchProps) {
  return (
    <div>
      <Header title="Busca" userName={userName || "Visitante"} />
      <form method="GET" action="/search">
        <Input
          id="search"
          name="cityName"
          label="Buscar Cidade"
          type="text"
          defaultValue={cityName}
        />
        <Button type="submit">Buscar</Button>
      </form>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userToken = context.req.cookies["userToken"];
  let userName = "Visitante";

  if (userToken) {
    userName = "Usuário Autenticado";
  }

  const cityName = context.query.cityName || "";

  let cityList: City[] = [];

  if (cityName) {
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
      );
      if (response.ok) {
        cityList = await response.json();
      }
    } catch (error) {
      console.error("Erro ao buscar dados da cidade:", error);
    }
  }

  return {
    props: {
      userName,
      cityName,
      cityList,
    },
  };
};
