export const initialState = {
	users: []
}
export default function (state=initialState, action){
	switch(action.type) {
	 case 'USER_LIST_SUCCESS':
		return { ...state, users: action.payload};
	 default:
		return state;
  }
};