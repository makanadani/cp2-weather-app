import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import UserContext, { UserContextProvider } from '@/context/UserContext';
import "@fontsource/poppins"

const theme = extendTheme({
  fonts: {
    body: 'Poppins, Arial, sans-serif',
    heading: 'Poppins, Arial, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        fontFamily: 'Poppins, Arial, sans-serif',
        fontWeight: 600,
        minHeight: '100vh',
        lineHeight: '1.38',
      },
      a: {
        textDecoration: 'none',
      },
      img: {
        maxWidth: '100%',
      },
      li: {
        listStyle: 'none',
      },
      table: {
        borderCollapse: 'collapse',
      },
    },
  },
});

export default function RootLayout({ 
  children, 
}: {
  children: React.ReactNode;
 }) {
  return (
    <html lang="pt-br">
      <body>
        <ChakraProvider theme={theme}>
          <UserContextProvider>
            {children}
          </UserContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
