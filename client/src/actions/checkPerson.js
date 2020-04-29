export const checkPerson = (person, act) => {
  return {
    type: "ADD_PERSON_TO_CHECKED_LIST",
    payload: person,
    act,
  };
};
