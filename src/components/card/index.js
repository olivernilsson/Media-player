import React from "react"
import { StyledCard, StyledCardImage, StyledCardText } from "./style"
import store from "../../store"

const Card = (props) => {

  return (
    <StyledCard onClick={() => store.dispatch({ type: "UPDATE_CURRENTLY_PLAYING", data: {title: props.title, artist: props.artist ? props.artist : props.desc, image: props.image} })}>
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
