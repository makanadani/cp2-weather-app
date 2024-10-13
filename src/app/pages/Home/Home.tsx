import { useContext } from 'react';
import { Layout } from '../components/Layout/Layout.style';
import { Header } from '../components/Header/Header.style';
import UserContext from '../context/UserContext.tsx';
import { GetServerSideProps } from 'next';
import { VerifyLogin } from '../utils/verifyLogin';

interface CityData {
  cidade: string;
  estado: string;
  clima: {
    min: number;
    max: number;
    condicao_desc: string;
  }[];
}

interface HomeProps {
  cityData: CityData | null;
  cityCode: number;
  isAuthenticated: boolean;
}

export default function Home({ cityData, cityCode, isAuthenticated }: HomeProps) {
  const { userName } = useContext(UserContext);

  if (!isAuthenticated) {
    VerifyLogin();
    return null;
  }

  return (
    <Layout>
      <Header title="Inicio" userName={userName} />
      <div>
        {!cityData ? (
          <p>Carregando</p>
        ) : (
          <div>
            <h2>
              {cityData.cidade}/{cityData.estado}
            </h2>
            <p>
              Min<span>{cityData.clima[0].min}</span>/ Max
              <span>{cityData.clima[0].max}</span>
            </p>
            <p>{cityData.clima[0].condicao_desc}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cityCode = context.query.cityCode || 244; 
  let cityData = null;

  try {
    const response = await fetch(
      `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}`
    );
    cityData = await response.json();
  } catch (error) {
    console.error('Erro ao carregar dados da cidade', error);
  }

  const isAuthenticated = true;

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      cityData,
      cityCode,
      isAuthenticated,
    },
  };
};
