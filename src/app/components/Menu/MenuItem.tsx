"use client";

import React from "react";
import { StyledMenuItem } from "./Menu.style";
import Link from "next/link";

interface MenuItemProps {
  icon: JSX.Element | React.ReactNode;
  label: string;
  link: string;
}

export const MenuItem = ({ icon, label, link }: MenuItemProps) => {
  return (
    <StyledMenuItem>
      {icon}
      <Link href={link}>{label}</Link>
    </StyledMenuItem>
  );
};
