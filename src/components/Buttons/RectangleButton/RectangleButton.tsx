import DefaultButton from "../DefaultButton";
import styled from "styled-components";
import { UIConfig } from "configs";

type TypeDefaultButton = typeof DefaultButton;
interface RectangleButton extends TypeDefaultButton {
  // backgroundColour?: string;
}

// how to extend styled components in TS
const RectangleButton = styled<TypeDefaultButton>(
  DefaultButton
)<RectangleButton>`
  &:hover {
  }
`;
export default RectangleButton;
