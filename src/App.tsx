import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import { MainContainer } from "./components/styled/MainContainer.styled";
import StepsList from "./components/StepsList";

const theme = {
  colors: {
    primary: "#00ADAA",
    background: "#FFFFFF",
    text: "#0E2A35",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainContainer>
          <h1>CCT Lab Process</h1>
          <StepsList />
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export { theme };
export default App;
