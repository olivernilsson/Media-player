import React from "react"
import { StyledDisplay } from "./style"
import Card from "../card"
import musicData from "../../music"
import videoData from "../../videos"

const Display = () => {
  let state = "music"

  console.log(musicData)

  if (state === "music") {
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
  } else if (state === "video") {
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
  } else if (state === "options") {
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
