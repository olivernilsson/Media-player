import React from "react"
import { StyledCard, StyledCardImage, StyledCardText } from "./style"

const Card = (props) => {
  return (
    <StyledCard>
      <StyledCardImage
        src={props.image || "/images/placeholder"}
        alt="artist"
      ></StyledCardImage>
      <StyledCardText>{props.title || "N/A"}</StyledCardText>
      <StyledCardText>{props.artist || props.desc || "N/A"}</StyledCardText>
      <StyledCardText>{props.length || "N/A"}</StyledCardText>
    </StyledCard>
  )
}

export default Card
