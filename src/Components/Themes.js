import { createGlobalStyle } from "styled-components";

export const LightTheme = {
    body: "white",
    fontColor: "black",
}
export const DarkTheme = {
    body: "black",
    fontColor: "white",
}

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;