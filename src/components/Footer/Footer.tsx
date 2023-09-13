import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { UIConfig } from "configs";

const UIFooterBlock = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${UIConfig.layouts.footer.height}px;
`;
export default function Footer({ children }: PropsWithChildren) {
  return <UIFooterBlock>this is footer</UIFooterBlock>;
}
