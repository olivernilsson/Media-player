import React, {useState} from "react"
import { GlobalStyle } from "./globalStyle"

//components
import Header from "./components/header"
import Menu from "./components/menu"
import Display from "./components/display"
import Controls from "./components/controls"
import store from "./store"

function App() {

  const [state, setState] = useState(store.getState())

  store.subscribe(() => {
    setState(store.getState())
  });

  return (
    <div className="App">
      <GlobalStyle darkMode={state.options.darkMode} />
      <Header></Header>
      <Menu></Menu>
      <Display></Display>
      <Controls></Controls>
    </div>
  )
}

export default App
