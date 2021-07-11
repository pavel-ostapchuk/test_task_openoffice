import React, { FC } from "react";
import { ICheckBoxProps } from "./interface";
import { LabelStyled } from "./style";

const CheckBox: FC<ICheckBoxProps> = ({
  name,
  type,
  onChange,
  checkedStatus,
  disabledStatus,
}) => {
  return (
    <div>
      <input
        id={name}
        type={type}
        checked={checkedStatus}
        data-input-name={name}
        onChange={onChange}
        disabled={disabledStatus}
      />
      <LabelStyled onChange={onChange} htmlFor={name}>
        {name}
      </LabelStyled>
    </div>
  );
};

export default CheckBox;
