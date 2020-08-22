import styled from "styled-components"

export const StyledCard = styled.div`
  height: 300px;
  width: 240px;
  position: relative;
  display: grid;
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
  background: #222f3e;
  transition: all 0.3s;
  overflow: visible;
  margin: 20px 0;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

export const StyledCardImage = styled.img`
  width: 80%;
  height: 144px;
  margin: 20px auto;
  object-fit: cover;
`
export const StyledCardText = styled.div``
