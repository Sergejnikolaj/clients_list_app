export const initialState = {
  activeUser: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "USER_ACTIVE":
      return { ...state, activeUser: action.payload };
    default:
      return state;
  }
}
