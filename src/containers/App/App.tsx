import MainPageContainer from "../MainPageContainer";
import MainPage from "../../components/MainPage";
import { AppWrapperStyled } from "./style";

function App() {
  return (
    <AppWrapperStyled>
      <MainPageContainer>
        <MainPage />
      </MainPageContainer>
    </AppWrapperStyled>
  );
}

export default App;
