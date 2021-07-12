import styled from "styled-components";
import { ILabelStyledProps } from "./interface";

export const LabelStyled = styled.label<ILabelStyledProps>`
  padding-left: 10px;
  transition: 0.3s;
  ${({ disabled }) => disabled && "opacity: 0.4"}
`;
