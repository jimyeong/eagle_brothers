import React from "react";
import styled from "styled-components";

const DefaultButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background: transparent;
  font-weight: 400;
  &:focus {
    outline: none;
  }
`;

export default DefaultButton;
