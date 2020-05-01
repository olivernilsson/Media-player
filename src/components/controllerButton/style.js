import styled from "styled-components"

export const StyledButton = styled.button`
  height: ${(props) => props.height || props.width};
  width: ${(props) => props.width || props.height};
  background: ${(props) => (props.darkMode ? "#d2dae2" : "#1e272e")};
  color: ${(props) => (props.darkMode ? "#1e272e" : "#d2dae2")};
  border-radius: ${(props) => props.borderRadius};
  margin: auto;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    background: ${(props) => (props.darkMode ? "#1e272e" : "#2c3942")};
  }
`
