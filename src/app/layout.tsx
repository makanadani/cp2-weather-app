import { Menu } from './components/Menu/Menu';
import styled from 'styled-components';

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
    <html lang="en">
      <body>
        <StyledLayout>
          <main role="main">{children}</main>
          <footer>
            <Menu />
          </footer>
        </StyledLayout>
      </body>
    </html>
  );
}
