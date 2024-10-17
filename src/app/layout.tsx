import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "../context/UserContext";
import "@/app/globals.css";

export default function RootLayout({ 
  children, 
}: {
  children: React.ReactNode;
 }) {
  return (
    <html lang="pt-br">
      <body>
        <ChakraProvider>
          <UserContextProvider>
            {children}
          </UserContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
