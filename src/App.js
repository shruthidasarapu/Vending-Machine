import  {useState} from "react";
import './App.css';
import { VendingMachine } from './Components/VendingMachine';
import styled, {ThemeProvider} from "styled-components";
import { DarkTheme, LightTheme, GlobalStyles } from "./Components/Themes";


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
const[theme, setTheme] = useState("light")

const ThemeToggler = () => {
  theme === "light" ? setTheme("dark") : setTheme("light");
}
  return (
    <div className="App">
       <ThemeProvider theme = {theme === "light" ? LightTheme : DarkTheme}>
         <GlobalStyles/>
        <StyledApp>
        <h2>Dark Mode</h2>
        <button onClick={() => ThemeToggler()}>Change Theme</button>
         <VendingMachine/>
         </StyledApp>
      </ThemeProvider>
   </div>
  );
}

export default App;
