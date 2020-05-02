export const getData = (data) => {
  return {
    type: "GET_USERS_LIST",
    payload: data,
  };
};

export const changeUserIsChecked = (data) => {
  return {
    type: "CHANGE_USER_IS_CHECKED",
    payload: data,
  };
};
