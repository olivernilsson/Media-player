import styled from "styled-components"

export const StyledButton = styled.button`
  height: ${(props) => props.height || props.width};
  width: ${(props) => props.width || props.height};
  background: ${(props) => (props.darkMode ? "#d2dae2" : "#1e272e")};
  border-radius: ${(props) => props.borderRadius};
  margin: auto;
  border: none;
  outline: none;
`

export const ButtonImage = styled.img`
  height: ${(props) => props.imgSize};
  width: ${(props) => props.imgSize};
  color: #1e272e";
`
