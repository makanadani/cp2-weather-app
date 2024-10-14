"use client";

import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";

interface PrivateRoutesProps {
  children: ReactNode;
}

export const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  const router = useRouter();

  useEffect(() => {
    const userToken = sessionStorage.getItem("userToken");

    const token = userToken ? JSON.parse(userToken) : null;

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
};
