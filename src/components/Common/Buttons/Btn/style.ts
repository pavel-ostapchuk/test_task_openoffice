import styled from "styled-components";

export const BtnStyled = styled.button`
  width: 200px;
  height: 35px;
  border-radius: 0px;
  border: none;
  background: #e9e9e9;
  transition: 0.3s;
  cursor: pointer;
  &:active,
  :hover {
    background: #bababa;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.8;
  }
`;
