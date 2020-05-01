import React from "react"
import { StyledButton, ButtonImage } from "./style"
import { Play, SkipForward, SkipBack } from "react-feather"

const ControllerButton = (props) => {
  const buttonType = (type) => {
    console.log("running", type)
    if (type === "Play") {
      return <Play size={28} style={{ marginLeft: "4px" }} />
    } else if (type === "Forward") {
      return <SkipForward size={20} />
    } else {
      return <SkipBack size={20} style={{ marginRight: "2px" }} />
    }
  }

  return (
    <StyledButton
      height={props.height}
      width={props.width}
      borderRadius={props.borderRadius}
      backGround={props.backGround}
      onClick={props.clickHandler}
      src={buttonType(props.type)}
    >
      {buttonType(props.type)}
    </StyledButton>
  )
}

export default ControllerButton
