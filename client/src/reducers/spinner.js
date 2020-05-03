export const initialState = {
  showSpinner: true,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_SPINNER":
      return { ...state, showSpinner: action.payload };
    default:
      return state;
  }
}
