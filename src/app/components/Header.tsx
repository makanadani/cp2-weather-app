import Link from "next/link";
import { Flex, Box, Heading, Button, Text } from "@chakra-ui/react";

interface HeaderProps {
  title: string;
  userName: string;
}

export const Header = ({ title, userName }: HeaderProps) => {
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("userToken");
    }
  };

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      p={4}
    >
      <Heading as="h1" mb={0}>
        {title}
      </Heading>

      <Box>
        {userName && userName !== "Visitante" ? (
          <Flex gap={2} alignItems="center">
            <Text>{userName}</Text>
            <Link href="/login" passHref>
              <Button
                size="sm"
                bg="#1f1e31"
                color="white"
                borderRadius="6px"
                onClick={handleLogout}
              >
                Sair
              </Button>
            </Link>
          </Flex>
        ) : (
          <Link href="/login" passHref>
            <Button size="sm" bg="#1f1e31" color="white" borderRadius="6px">
              Login
            </Button>
          </Link>
        )}
      </Box>
    </Flex>
  );
};
