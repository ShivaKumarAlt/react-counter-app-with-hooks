
const initialState = {
  count :0
}

const countReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case "INCREASE_COUNT":
      return {...state, count: action.payload}
    case "DECREASE_COUNT":
      return {...state, count: action.payload}
    case "RESET_COUNT":
      return {...state, count: action.payload}

    default:
      return state
  }
}

export default countReducer