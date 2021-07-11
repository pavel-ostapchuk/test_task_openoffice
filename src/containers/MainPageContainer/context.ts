import { createContext } from "react";
import { IMainPageContextProps } from "./interface";

export const MainPageContext = createContext<IMainPageContextProps>({
  isEnableContent: false,
  isAutoRefresh: false,
  currentCatData: null,
  loading: false,
  callbacks: {},
});
