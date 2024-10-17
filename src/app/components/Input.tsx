import { FormLabel, Input as ChakraInput } from "@chakra-ui/react";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, id, name, onChange, ...rest }: InputProps) => {
  const { size, ...filteredRest } = rest;

  return (
    <>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ChakraInput
        id={id}
        name={name}
        onChange={onChange}
        border="1px solid #1f1e31"
        padding="8px 12px"
        borderRadius="6px"
        marginBottom="8px"
        _focus={{ borderColor: "#3b3a4f", boxShadow: "0 0 0 1px #3b3a4f" }}
        {...filteredRest}
      />
    </>
  );
};

export default Input;
