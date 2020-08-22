import React, { useState } from "react"
import {
  StyledDisplay,
  StyledOptionsTitle,
  StyledOptionsRow,
  StyledOptionsText,
} from "./style"
import Card from "../card"
import musicData from "../../music"
import videoData from "../../videos"
import store from "../../store"
import Switch from "react-switch"
import { Sun, Moon } from "react-feather"

const Display = () => {
  const [state, setState] = useState(store.getState())

  store.subscribe(() => {
    setState(store.getState())
  })

  const handleChange = () => {
    store.dispatch({
      type: "UPDATE_THEME",
      data: { darkMode: !state.options.darkMode },
    })
  }

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
        <StyledOptionsTitle>Options</StyledOptionsTitle>
        <StyledOptionsText>Theme</StyledOptionsText>
        <StyledOptionsRow>
          <Switch
            onChange={handleChange}
            checked={state.options.darkMode}
            uncheckedIcon={
              <Sun
                size={20}
                style={{
                  position: "absolute",
                  top: "4px",
                  left: "4px",
                  cursor: "pointer",
                  zIndex: "15",
                }}
              />
            }
            checkedIcon={
              <Moon
                size={20}
                style={{
                  position: "absolute",
                  top: "4px",
                  left: "4px",
                  cursor: "pointer",
                  zIndex: "15",
                }}
              />
            }
          />
        </StyledOptionsRow>
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
