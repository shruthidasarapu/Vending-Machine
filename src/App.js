// import { useState } from "react";
import "./App.css";
import { VendingMachine } from "./Components/VendingMachine";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, GlobalStyles } from "./Components/Themes";
import { UseDarkMode } from "./Components/UseDarkMode";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
const App = () => {
  const [theme, themeToggler] = UseDarkMode();

  const themeMode = theme === "light" ? LightTheme : DarkTheme;

  const Toggle = ({ theme, toggleTheme }) => {
    return <button onClick={toggleTheme}>Change Theme</button>;
  };

  return (
    <div className='App'>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <StyledApp>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <VendingMachine />
        </StyledApp>
      </ThemeProvider>
    </div>
  );
};

export default App;
