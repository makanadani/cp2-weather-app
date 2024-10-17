import { Flex, Box, Text } from "@chakra-ui/react";
import { BiHomeAlt, BiSearch, BiHeart, BiUserCircle } from "react-icons/bi";
import Link from "next/link";

export const Menu = () => {
  return (
    <Flex as="nav" alignItems="flex-end">
      <Flex
        as="ul"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        margin={0}
        padding={0}
        listStyleType="none"
      >
        <Box as="li" display="flex" alignItems="center" flexDirection="column" margin={0}>
          <BiHomeAlt size="1.5rem" color="#38aede" />
          <Link href="/" passHref>
            <Text fontSize="0.8rem" color="#1f1e31" mt="0.3rem" textDecoration="none">
              Inicio
            </Text>
          </Link>
        </Box>
        <Box as="li" display="flex" alignItems="center" flexDirection="column" margin={0}>
          <BiSearch size="1.5rem" color="#38aede" />
          <Link href="/busca" passHref>
            <Text fontSize="0.8rem" color="#1f1e31" mt="0.3rem" textDecoration="none">
              Busca
            </Text>
          </Link>
        </Box>
        <Box as="li" display="flex" alignItems="center" flexDirection="column" margin={0}>
          <BiHeart size="1.5rem" color="#38aede" />
          <Link href="/favorites" passHref>
            <Text fontSize="0.8rem" color="#1f1e31" mt="0.3rem" textDecoration="none">
              Favoritos
            </Text>
          </Link>
        </Box>
        <Box as="li" display="flex" alignItems="center" flexDirection="column" margin={0}>
          <BiUserCircle size="1.5rem" color="#38aede" />
          <Link href="/perfil" passHref>
            <Text fontSize="0.8rem" color="#1f1e31" mt="0.3rem" textDecoration="none">
              Perfil
            </Text>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Menu;
