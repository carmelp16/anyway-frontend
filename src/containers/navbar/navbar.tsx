import React from "react";
import { Layout } from "antd";

import { Logo, headerStyles } from "./styles";
import LogoSrc from "./anyway-logo.png";

const { Header } = Layout;

export default function NavBar() {
  return (
    <Header style={headerStyles}>
      <Logo src={LogoSrc} />
    </Header>
  );
}
