import { BiHomeAlt, BiSearch, BiHeart, BiUserCircle } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";
import Link from "next/link";

export const Menu = () => {
  return (
    <StyledMenu>
      <StyledWrapperMenu as="ul">
        <StyledMenuItem as="li">
          <BiHomeAlt size="1.5rem" color="#38aede" />
          <Link href="/">Início</Link>
        </StyledMenuItem>
        <StyledMenuItem as="li">
          <BiSearch size="1.5rem" color="#38aede" />
          <Link href="/busca">Busca</Link>
        </StyledMenuItem>
        <StyledMenuItem as="li">
          <BiHeart size="1.5rem" color="#38aede" />
          <Link href="/favorites">Favoritos</Link>
        </StyledMenuItem>
        <StyledMenuItem as="li">
          <BiUserCircle size="1.5rem" color="#38aede" />
          <Link href="/perfil">Perfil</Link>
        </StyledMenuItem>
      </StyledWrapperMenu>
    </StyledMenu>
  );
}