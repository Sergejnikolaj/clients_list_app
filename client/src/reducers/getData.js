const initialState = {
  loading: false,
  users: [],
  error: null,
};

export default function (state = initialState, action) {
  if (action.payload && action.payload.checkPhone) {
    state.users.forEach((element) => {
      if (element.contact.phone === action.payload.checkPhone) {
        element.isChecked = !element.isChecked;
      }
    });
  }
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        loading: true,
      };
    case "GET_USERS_SUCCESS":
      const { users } = action.payload;
      users.forEach((element) => (element.isChecked = false));
      return {
        ...state,
        loading: false,
        error: null,
        users: users,
      };
    case "GET_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
