export const search = (user) => {
	return{
		type: 'USER_SEARCH',
		payload: user
	};
};