import React, { CSSProperties, MouseEventHandler, useRef } from "react";
import styled from "styled-components";
import useRipple from "hooks/useRipple";

const UIRiffleButtonBlock = styled.button`
  padding: 16px;
  background-color: "#1e293b";
  color: inherit;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

interface IRippleButton extends React.PropsWithChildren {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string;
  style?: CSSProperties;
}
export default function RippleButton({
  children,
  onClick,
  className,
  style,
}: IRippleButton) {
  const ref = useRef<HTMLButtonElement>(null);
  const ripples = useRipple(ref);
  return (
    <UIRiffleButtonBlock
      style={style && style}
      ref={ref}
      onClick={onClick}
      className={className}
    >
      {ripples} {children}
    </UIRiffleButtonBlock>
  );
}
