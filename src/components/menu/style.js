import styled from "styled-components"

export const StyledMenu = styled.div`
  height: calc(100vh - 100px);
  width: 260px;
  left: ${(props) => (props.open ? "0px" : "-260px")};
  background: #2f3640;
  position: absolute;
  z-index: 5;
  top: 0;
`

export const StyledMenuOptionsContainer = styled.div`
  height: 65%;
  width: 100%;
  margin-top: 35%;
`

export const StyledMenuOption = styled.div`
  height: 60px;
  line-height: 60px;
  width: 90%;
  border-top: 2px solid #848f98;
  border-bottom: 2px solid #848f98;
  margin-top: -2px;
  font-size: 20px;
  padding-left: 30px;
  box-sizing: border-box;
  transition: all 0.3s;
  :hover {
    width: 100%;
    background: #36444f;
    cursor: pointer;
  }
`
