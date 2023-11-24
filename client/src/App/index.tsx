import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { darkTheme, lightTheme } from '../them';
import { AppContainer, TodoContainer } from './style';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoFooter } from '../components/TodoFooter';


function App() {

  const mainState = useTypedSelector(state => state.main);

  return (
    <ThemeProvider theme={mainState.theme === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <AppContainer>
              <TodoContainer>
                <Header />
                <Main />
                <Footer />
              </TodoContainer>
            </AppContainer>
          } />
          <Route path="settings" element={
            <TodoFooter />
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
