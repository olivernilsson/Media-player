
export default function (state = "MUSIC", action) {
    switch (action.type) {

        case "UPDATE_DISPLAY":
            return action.data

        default:
            return state

    }

}