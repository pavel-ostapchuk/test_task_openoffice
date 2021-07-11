import React, { useContext } from "react";
import { InputNames } from "../../constants";
import { MainPageContext } from "../../containers/MainPageContainer/context";
import Btn from "../Common/Buttons/Btn";
import CheckBox from "../Common/Inputs/CheckBox";
import {
  GetCatSectionStyled,
  BtnSectionStyled,
  ImageWrapperStyled,
  SpinnerWrapperStyled,
} from "./style";

import spinner from "../../assets/image/spinner.gif";
import { IMainPageContextProps } from "../../containers/MainPageContainer/interface";

const MainPage = () => {
  const { enabled, autoRefresh } = InputNames;

  const {
    isEnableContent,
    isAutoRefresh,
    currentCatData,
    loading,
    callbacks: {
      onChangeEnabledInput,
      onChangeAutoRefreshInput,
      onFetchHandler,
    },
  }: IMainPageContextProps = useContext(MainPageContext);

  return (
    <>
      <GetCatSectionStyled>
        <CheckBox
          name={enabled}
          type="checkbox"
          onChange={onChangeEnabledInput}
          checkedStatus={isEnableContent}
        />
        <CheckBox
          name={autoRefresh}
          type="checkbox"
          onChange={onChangeAutoRefreshInput}
          checkedStatus={isAutoRefresh}
          disabledStatus={!isEnableContent}
        />
        <BtnSectionStyled>
          <Btn
            btnType="button"
            btnText="Get cat"
            disabledStatus={!isEnableContent}
            onClickHandler={onFetchHandler}
          />
        </BtnSectionStyled>
        {loading ? (
          <SpinnerWrapperStyled>
            <img src={spinner} alt="spinner" />
          </SpinnerWrapperStyled>
        ) : !!currentCatData ? (
          <ImageWrapperStyled>
            <img src={currentCatData?.url} alt="Pic" />
          </ImageWrapperStyled>
        ) : null}
      </GetCatSectionStyled>
    </>
  );
};

export default MainPage;
