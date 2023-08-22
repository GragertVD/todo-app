import { ThemeProvider } from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { darkTheme, lightTheme } from "../them";
import { AppContainer, TodoContainer } from "./style";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";


function App() {

  const mainState = useTypedSelector(state => state.main);

  return (

    <ThemeProvider theme={mainState.theme === "light" ? lightTheme : darkTheme}>
      <AppContainer>
        <TodoContainer>
          <Header />
          <Main />
          <Footer />
        </TodoContainer>
      </AppContainer>
    </ThemeProvider >
  );
}

export default App;
