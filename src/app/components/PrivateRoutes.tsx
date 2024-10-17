import { GetServerSideProps } from "next";
import { ReactNode } from "react";

interface PrivateRoutesProps {
  children: ReactNode;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userToken = context.req.cookies["userToken"];
  const token = userToken ? JSON.parse(userToken) : null;
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  return <>{children}</>;
};

export default PrivateRoutes;
