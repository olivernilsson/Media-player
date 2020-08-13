import styled from "styled-components"

export const StyledDisplay = styled.div`
  width: 90vw;
  padding: 100px 0;
  margin-left: 5vw;
  display: grid;
  place-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  box-sizing: border-box;
  justify-content: space-between;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
