export default function (state = {}, action) {
  switch (action.type) {

      case "UPDATE_CURRENTLY_PLAYING":
          return action.data

      default:
          return state

  }

}