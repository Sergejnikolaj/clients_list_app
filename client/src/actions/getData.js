export const getData = (data) => {
  return {
    type: "GET_USERS_LIST",
    payload: data,
  };
};
