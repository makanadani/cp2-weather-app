import { useContext, useEffect, useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Header } from '../../components/Header/Header';
import UserContext from '../../context/UserContext';
import { VerifyLogin } from '../../utils/verifyLogin';

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
  const { userName } = useContext(UserContext) || {};

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityData, setCityData] = useState(null);

  const loadCity = async (cityCode: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}`
      );
      const data = await response.json();
      setCityData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const inicialCity = 244;
    loadCity(inicialCity);
  }, []);

  useEffect(() => {
    if (!userName) {
      VerifyLogin();
    }
  }, [userName]);

  return (
    <Layout>
      <Header title="Inicio" userName={userName || 'Guest'} />
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
    </Layout>
  );
}
