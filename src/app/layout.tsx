"use client";

import { Menu } from './components/Menu/Menu';
import styled from 'styled-components';
import { UserContextProvider } from './UserContext';
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

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body>
        <UserContextProvider>
          <StyledLayout>
            <main role="main">{children}</main>
            <footer>
              <Menu />
            </footer>
          </StyledLayout>
        </UserContextProvider>
      </body>
    </html>
  );
}
