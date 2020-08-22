export default function (state = {darkMode: true}, action) {
  switch (action.type) {

      case "UPDATE_THEME":
          return action.data

      default:
          return state

  }

}