export const actUser = (data) => {
  return {
    type: "USER_ACTIVE",
    payload: data,
  };
};
