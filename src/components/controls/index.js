import React from "react"
import { StyledControls, ButtonContainer } from "./style"
import ControllerButton from "../controllerButton"

const Controls = () => {
  return (
    <StyledControls>
      <ButtonContainer>
        <ControllerButton
          height="40px"
          borderRadius="50%"
          type={"Back"}
        ></ControllerButton>
        <ControllerButton
          height="50px"
          borderRadius="50%"
          type={"Play"}
        ></ControllerButton>
        <ControllerButton
          height="40px"
          borderRadius="50%"
          type={"Forward"}
        ></ControllerButton>
      </ButtonContainer>
    </StyledControls>
  )
}

export default Controls
