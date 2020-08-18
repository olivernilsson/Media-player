import React, { useState } from "react"
import {
  StyledMenu,
  StyledMenuOption,
  StyledMenuOptionsContainer,
} from "./style"
import { Menu as MenuIcon, X } from "react-feather"
import store from "../../store"

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <MenuIcon
        onClick={() => setOpen(!open)}
        size={48}
        style={{
          position: "fixed",
          top: "20px",
          left: "24px",
          cursor: "pointer",
          zIndex: "15",
        }}
      ></MenuIcon>
      <StyledMenu open={open}>
        <X
          onClick={() => setOpen(!open)}
          size={48}
          style={{
            position: "absolute",
            top: "20px",
            left: "24px",
            cursor: "pointer",
          }}
        ></X>
        <StyledMenuOptionsContainer>
          <StyledMenuOption onClick={() => store.dispatch({ type: "UPDATE_DISPLAY", data: "MUSIC" })}>Music</StyledMenuOption>
          <StyledMenuOption onClick={() => store.dispatch({ type: "UPDATE_DISPLAY", data: "VIDEO" })}>Videos</StyledMenuOption>
          <StyledMenuOption onClick={() => store.dispatch({ type: "UPDATE_DISPLAY", data: "OPTIONS" })}>Options</StyledMenuOption>
        </StyledMenuOptionsContainer>
      </StyledMenu>
    </React.Fragment>
  )
}

export default Menu
