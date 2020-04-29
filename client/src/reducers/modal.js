export const initialState = {
  modal: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_MODAL_WINDOW":
      return { ...state, modal: action.payload };
    default:
      return state;
  }
}
