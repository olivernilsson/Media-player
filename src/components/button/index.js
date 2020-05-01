import React from "react"
import { StyledButton, ButtonImage } from "./style"
import { Play } from "react-feather"

const Button = (props) => {
  return (
    <StyledButton
      height={props.height}
      width={props.width}
      borderRadius={props.borderRadius}
      backGround={props.backGround}
      onClick={props.clickHandler}
    ></StyledButton>
  )
}

export default Button
