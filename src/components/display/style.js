import styled from "styled-components"

export const StyledDisplay = styled.div`
  height: calc(100vh - 200px);
  width: 100%;
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  box-sizing: border-box;
  justify-content: space-around;
  padding: 20px 40px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
