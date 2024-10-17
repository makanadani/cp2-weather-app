import { Button as ChakraButton } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const StyledButton = styled(ChakraButton)`
  border: 0;
  padding: 8px 12px;
  color: white;
  background-color: #1f1e31;
  border-radius: 6px;

  &:hover {
    background-color: #333; /* Exemplo de hover */
  }
`;
