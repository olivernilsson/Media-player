import React from "react"
import { StyledHeader } from "./style"
import SearchBar from "../searchBar"
import { Menu } from "react-feather"

const Header = () => {
  return (
    <StyledHeader>
      <SearchBar></SearchBar>
    </StyledHeader>
  )
}

export default Header
