import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    max-height: 100vh
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    font-family: "Jost";
    color: ${(props) => (props.darkMode ? "#d2dae2" : "#1e272e")};
    background: ${(props) => (props.darkMode ? "#1e272e" : "#d2dae2")};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div {
    font-size: 18px;
  }
`
