"use client";

import { Menu } from './components/Menu/Menu';
import styled, { ThemeProvider } from 'styled-components';
import { UserContextProvider } from './context/UserContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/Theme';
import React from 'react';

const StyledLayout = styled.div`
  width: 92vw;
  margin: 3vw auto;
  display: grid;
  grid-template-rows: 84vh 10vh;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={theme}>
          <UserContextProvider>
            <GlobalStyles />
            <StyledLayout>
              <main role="main">{children}</main>
              <footer>
                <Menu />
              </footer>
            </StyledLayout>
          </UserContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
