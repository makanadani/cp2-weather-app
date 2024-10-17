import { UserContextProvider } from "./context/UserContext";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
