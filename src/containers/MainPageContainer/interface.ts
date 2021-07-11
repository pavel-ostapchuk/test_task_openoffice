export interface ICatProps {
  breeds: any;
  id: string;
  height: number;
  url: string;
  width: number;
}

export interface IMainPageContextProps {
  isEnableContent: boolean;
  isAutoRefresh: boolean;
  currentCatData: ICatProps | null;
  loading: boolean;
  callbacks: {
    onChangeEnabledInput?: (e: Event) => void;
    onChangeAutoRefreshInput?: (e: Event) => void;
    onFetchHandler?: () => void;
  };
}
