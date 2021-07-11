import React, { useState } from "react";
import { useEffect } from "react";
import { useRequest } from "../../hooks/useRequest";
import { ICatProps } from "./interface";
import { MainPageContext } from "./context";

const MainPageContainer = ({ children }: any) => {
  const { loading, request } = useRequest();
  const [isEnableContent, setEnableContent] = useState(false);
  const [isAutoRefresh, setAutoRefresh] = useState(false);
  const [currentCatData, setCurrentCatData] = useState<ICatProps | null>(null);

  const onChangeEnabledInput = (e: Event) => {
    const { checked } = e.target as HTMLInputElement;
    setEnableContent(checked);
    setAutoRefresh(false);
  };

  const onChangeAutoRefreshInput = async (e: Event) => {
    const { checked } = e.target as HTMLInputElement;
    setAutoRefresh(checked);
  };

  const onFetchHandler = () => {
    request("https://api.thecatapi.com/v1/images/search")
      .then((res) => setCurrentCatData(res[0]))
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    if (isAutoRefresh) {
      const interval = setInterval(() => {
        request("https://api.thecatapi.com/v1/images/search")
          .then((res) => setCurrentCatData(res[0]))
          .catch((err) => {
            throw err;
          });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoRefresh, request]);

  return (
    <MainPageContext.Provider
      value={{
        isEnableContent,
        isAutoRefresh,
        currentCatData,
        loading,
        callbacks: {
          onChangeEnabledInput,
          onChangeAutoRefreshInput,
          onFetchHandler,
        },
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
};

export default MainPageContainer;
