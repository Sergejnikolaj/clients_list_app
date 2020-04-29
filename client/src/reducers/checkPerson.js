import _ from "lodash";

export const initialState = {
  checkedList: [],
};
export default function (state = initialState, action) {
  let arr = state.checkedList.slice();
  if (action.act === true) {
    arr.unshift(action.payload);
  } else if (action.act === false) {
    _.remove(arr, function (e) {
      return e.contact.phone === action.payload.contact.phone;
    });
  }
  switch (action.type) {
    case "ADD_PERSON_TO_CHECKED_LIST":
      return { ...state, checkedList: arr };
    default:
      return state;
  }
}
