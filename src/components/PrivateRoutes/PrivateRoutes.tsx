import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import Link from "next/link";
import { useRouter } from 'next/router';

interface PrivatePageProps {
  userToken: string | null;
}

const PrivatePage = ({ userToken }: PrivatePageProps) => {
  const router = useRouter();

  if (!userToken) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Bem-vindo à página privada!</h1>
      <p>Somente usuários autenticados podem ver esta página.</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userToken } = parseCookies(context);

  if (!userToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      userToken,
    },
  };
};

export default PrivatePage;
