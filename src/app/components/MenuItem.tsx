import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface MenuItemProps {
  icon: JSX.Element | React.ReactNode;
  label: string;
  link: string;
}

export const MenuItem = ({ icon, label, link }: MenuItemProps) => {
  return (
    <Box as="li" display="flex" alignItems="center" flexDirection="column" margin={0}>
      {icon}
      <Link href={link} passHref>
        <Text fontSize="0.8rem" color="#1f1e31" mt="0.3rem" textDecoration="none">
          {label}
        </Text>
      </Link>
    </Box>
  );
};

export default MenuItem;