"use client";

import styled from "styled-components";
import { UserContextProvider } from "./context/UserContext";

interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  width: 92vw;
  margin: 3vw auto;
  display: grid;
  grid-template-rows: 84vh 10vh;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="pt-br">
      <body>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}