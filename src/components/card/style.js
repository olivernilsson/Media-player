import styled from "styled-components"

export const StyledCard = styled.div`
  height: 300px;
  min-width: 240px;
  max-width: 240px;
  margin: 20px;
  position: relative;
  display: inline-block;
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
  background: #222f3e;
  transition: all 0.3s;
  flex: 1;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

export const StyledCardImage = styled.img`
  width: 80%;
  margin: 20px auto;
`
export const StyledCardText = styled.div``
