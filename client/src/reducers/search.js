export const initialState = {
  searchUsers: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "USER_SEARCH":
      return { ...state, searchUsers: action.payload };
    default:
      return state;
  }
}
