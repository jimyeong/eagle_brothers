import React from "react";
import styled from "styled-components";
import { UIConfig } from "configs";

const UIHeaderBlock = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 40px;
  background-color: ${UIConfig.colour.primary};
  box-shadow: 1px 1px 13px 13px rgba(0, 0, 0, 0.09);
  z-index: 1000;
`;
export default function Header() {
  return <UIHeaderBlock>this is header</UIHeaderBlock>;
}
