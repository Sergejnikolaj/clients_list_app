export const initialState = {
  users: [],
};
export default function (state = initialState, action) {
  if (Array.isArray(action.payload)) {
    action.payload.forEach((element) => {
      element.isChecked = false;
    });
  }
  if (action.payload && action.payload.checkPhone) {
    state.users.forEach((element) => {
      if (element.contact.phone === action.payload.checkPhone) {
        element.isChecked = !element.isChecked;
      }
    });
  }
  switch (action.type) {
    case "GET_USERS_LIST":
      return { ...state, users: action.payload };
    case "CHANGE_USER_IS_CHECKED":
      return { ...state };
    default:
      return state;
  }
}
