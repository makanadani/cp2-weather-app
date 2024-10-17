import styled from "@emotion/styled";
import { Input as ChakraInput, FormLabel } from "@chakra-ui/react";

// Estilizando o rótulo (label)
export const StyledLabel = styled(FormLabel)`
  display: block;
`;

// Estilizando o input
export const StyledInput = styled(ChakraInput)`
  border: 1px solid #1f1e31; /* Cor personalizada da borda */
  padding: 8px 12px;         /* Padding personalizado */
  border-radius: 6px;        /* Borda arredondada */
  margin-bottom: 8px;        /* Espaçamento inferior */
`;
