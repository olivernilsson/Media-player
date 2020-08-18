import { combineReducers } from "redux"

import DisplayReducer from "./displayReducer"
import MediaReducer from "./mediaReducer"

export default combineReducers({
    display: DisplayReducer,
    media: MediaReducer
})