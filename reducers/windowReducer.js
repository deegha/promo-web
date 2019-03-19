
const initialState = {
  width: 0,
  height: 0
}

export const windowReducer = (state=initialState, action) => {
  switch(action.type) {
    default:
      return state
    case 'set':
      return state
  }
}
