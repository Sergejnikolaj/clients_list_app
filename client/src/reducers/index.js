export const initialState = {
	users: [],
	searchUsers: [],
	activeUser: ''
}

export function reducer(state = initialState, action) {
  switch(action.type) {
		case 'USER_LIST_SUCCESS':
			return { ...state, users: action.payload, searchUsers: action.payload };
		case 'USER_SEARCH':
			return { ...state, searchUsers: action.payload };
		case 'USER_ACTIVE':
			return { ...state, activeUser: action.payload };
		default:
			return state;
	}
}