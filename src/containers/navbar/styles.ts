import styled, { CSSProperties } from "styled-components";

export const Logo = styled.img`
  height: 30px;
  margin-top: 10px;
  margin-right: 0px;
`;

export const headerStyles = {
  backgroundColor: "#f9f9f9",
  height: "48px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "24px",
  paddingRight: "24px",
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  position: "fixed",
  zIndex: 1100,
  width: "100%",
  direction: "rtl",
  top: 0,
  right: 0
} as CSSProperties;
