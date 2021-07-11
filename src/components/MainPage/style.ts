import styled from "styled-components";
import { IGetCatSectionStyledProps } from "./interface";

export const SpinnerWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
`;

export const GetCatSectionStyled = styled.div<IGetCatSectionStyledProps>`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 11px 11px rgba(52, 43, 43, 0.08);
  ${({ isMinHeightNeeded }) => isMinHeightNeeded && `min-height: 247px;`}
`;
export const BtnSectionStyled = styled.div`
  margin: 18px auto;
`;

export const ImageWrapperStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
