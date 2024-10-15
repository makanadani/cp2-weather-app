"use client";

import { Menu } from "./components/Menu/Menu";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  width: 92vw;
  margin: 3vw auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-br">
      <body>
        <StyledLayout>
          <main>{children}</main>
          <footer>
            <Menu />
          </footer>
        </StyledLayout>
      </body>
    </html>
  );
}
