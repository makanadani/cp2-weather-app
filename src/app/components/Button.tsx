import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <ChakraButton 
      type={type} 
      onClick={onClick} 
      colorScheme="teal"
    >
      {children}
    </ChakraButton>
  );
};
