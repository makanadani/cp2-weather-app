import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        <ChakraProvider>
          <Header title="Minha App" userName="Visitante" />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
