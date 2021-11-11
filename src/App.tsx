import GlobalStyles from "./components/styled/Global";
import { MainContainer } from "./components/styled/MainContainer.styled";
import StepsList from "./components/StepsList";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <h1>CCT Lab Process</h1>
        <StepsList />
      </MainContainer>
    </>
  );
}

export default App;
