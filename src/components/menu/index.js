import React, { useState } from "react"
import {
  StyledMenu,
  StyledMenuOption,
  StyledMenuOptionsContainer,
} from "./style"
import { Menu as MenuIcon, X } from "react-feather"

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <MenuIcon
        onClick={() => setOpen(!open)}
        size={48}
        style={{
          position: "absolute",
          top: "20px",
          left: "24px",
          cursor: "pointer",
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
          <StyledMenuOption>Music</StyledMenuOption>
          <StyledMenuOption>Videos</StyledMenuOption>
          <StyledMenuOption>Options</StyledMenuOption>
        </StyledMenuOptionsContainer>
      </StyledMenu>
    </React.Fragment>
  )
}

export default Menu