export const initialState = {
  lightTheme: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "SWITCH_COLOR_THEME":
      return { ...state, lightTheme: action.payload };
    default:
      return state;
  }
}
