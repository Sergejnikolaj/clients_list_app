import axios from "axios";

export const getUsers = () => {
  const url = "http://127.0.0.1:3040";
  return (dispatch) => {
    dispatch(getUsersStarted());
    axios
      .get(url)
      .then((res) => {
        dispatch(getUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUsersFailure(err.message));
      });
  };
};

const getUsersSuccess = (users) => ({
  type: "GET_USERS_SUCCESS",
  payload: {
    users,
  },
});

const getUsersStarted = () => ({
  type: "GET_USERS",
});

const getUsersFailure = (error) => ({
  type: "GET_USERS_FAILURE",
  payload: {
    error,
  },
});

export const changeUserIsChecked = (data) => {
  return {
    type: "CHANGE_USER_IS_CHECKED",
    payload: data,
  };
};
