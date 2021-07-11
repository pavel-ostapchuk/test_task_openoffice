import React, { FC } from "react";
import { IBtnStyledProps } from "./interface";
import { BtnStyled } from "./style";

const Button: FC<IBtnStyledProps> = ({
  btnType,
  btnText,
  disabledStatus,
  onClickHandler,
}) => {
  return (
    <BtnStyled
      type={btnType}
      disabled={disabledStatus}
      onClick={onClickHandler}
    >
      {btnText}
    </BtnStyled>
  );
};

export default Button;
