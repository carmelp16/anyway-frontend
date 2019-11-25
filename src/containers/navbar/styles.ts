import styled, { CSSProperties } from "styled-components";

export const Logo = styled.img`
  height: 6vh;
  margin-top: 1vh;
  margin-left: 3vw;
`;

export const headerStyles = {
  backgroundColor: "#f9f9f9",
  height: "6vh",
  display: "flex",
  alignItems: "center",
  paddingLeft: "1vw",
  paddingRight: "1vw",
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  position: "fixed",
  zIndex: 1100,
  width: "100%",
  direction: "rtl",
  top: 0,
  right: 0
} as CSSProperties;
