export default (state, action) => {
  switch (action.type) {
    case "SET_COLOR_LIST":
      return {...state, colorList: action.payload}
    default:
      break;
  }
};
