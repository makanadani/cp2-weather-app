import styled from "@emotion/styled";
import { Box, Flex } from "@chakra-ui/react";

export const StyledMenu = styled(Flex)`
  display: flex;
  align-items: flex-end;
`;

export const StyledWrapperMenu = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

export const StyledMenuItem = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;

  & a {
    font-size: 0.8rem;
    color: #1f1e31;
    text-decoration: none; /* Remover underline padrão */
  }
`;
