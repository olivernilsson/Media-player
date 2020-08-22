import React, { useState } from "react"
import { StyledDisplay } from "./style"
import Card from "../card"
import musicData from "../../music"
import videoData from "../../videos"
import store from "../../store"

const Display = () => {
  const [state, setState] = useState(store.getState())

  store.subscribe(() => {
    setState(store.getState())
  });

  if (state.display === "MUSIC") {
    return (
      <StyledDisplay>
        {musicData.map((song) => (
          <Card
            title={song.title}
            artist={song.artist}
            length={song.length}
            image={song.image}
            path={song.path}
          ></Card>
        ))}
      </StyledDisplay>
    )
  } else if (state.display === "VIDEO") {
    return (
      <StyledDisplay>
        {videoData.map((song) => (
          <Card
            title={song.title}
            desc={song.desc}
            length={song.length}
            image={song.image}
            path={song.path}
          ></Card>
        ))}
      </StyledDisplay>
    )
  } else if (state.display === "OPTIONS") {
    return (
      <StyledDisplay>
        <h2>Options</h2>
      </StyledDisplay>
    )
  } else {
    return (
      <StyledDisplay>
        <h2>Oops, something went wrong...</h2>
      </StyledDisplay>
    )
  }
}

export default Display
