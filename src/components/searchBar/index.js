import React from "react"
import { StyledSearchBar, SearchBarWrapper } from "./style"
import { Search } from "react-feather"

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <Search
        color="black"
        size={24}
        style={{ position: "absolute", top: "33px", left: "12px" }}
      ></Search>
      <StyledSearchBar></StyledSearchBar>
    </SearchBarWrapper>
  )
}

export default SearchBar
