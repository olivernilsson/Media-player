import React, { useState } from 'react';
import { StyledCurrentlyPlaying,
         StyledCurrentlyPlayingImage,
         StyledCurrentlyPlayingSong,
         StyledCurrentlyPlayingArtist,
         StyledCurrentlyPlayingTextContainer
       } from "./style"
import store from "../../store"

const CurrentlyPlaying = () => {

  const [state, setState] = useState(store.getState())

  store.subscribe(() => {
    setState(store.getState())
    console.log(state)
  });

  return(
    <StyledCurrentlyPlaying>
      {state.media.title ? 
      <StyledCurrentlyPlayingImage src={state.media.image || "/images/placeholder"} alt="Song image"></StyledCurrentlyPlayingImage> 
      : ""}
      <StyledCurrentlyPlayingTextContainer>
        <StyledCurrentlyPlayingSong>{state.media.title}</StyledCurrentlyPlayingSong>
        <StyledCurrentlyPlayingArtist>{state.media.artist ? state.media.artist : state.media.desc}</StyledCurrentlyPlayingArtist>
      </StyledCurrentlyPlayingTextContainer>
    </StyledCurrentlyPlaying>
  )
}

export default CurrentlyPlaying
