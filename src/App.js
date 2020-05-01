import React from "react"
import { Counter } from "./features/counter/Counter"
import { GlobalStyle } from "./globalStyle"

//components
import Header from "./components/header"
import Menu from "./components/menu"
import Display from "./components/display"
import Controls from "./components/controls"

function App() {
  return (
    <div className="App">
      <GlobalStyle darkMode />
      <Header></Header>
      <Menu></Menu>
      <Display></Display>
      <Controls></Controls>
    </div>
  )
}

export default App
