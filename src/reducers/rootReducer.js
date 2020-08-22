import { combineReducers } from "redux"

import DisplayReducer from "./displayReducer"
import MediaReducer from "./mediaReducer"
import optionsReducer from "./optionsReducer"

export default combineReducers({
    display: DisplayReducer,
    media: MediaReducer,
    options: optionsReducer
})