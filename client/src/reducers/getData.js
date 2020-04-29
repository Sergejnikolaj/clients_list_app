export const initialState = {
	users: []
}
export default function (state=initialState, action){
	switch(action.type) {
	 case 'GET_USERS_LIST':
		return { ...state, users: action.payload};
	 default:
		return state;
  }
};