export const gotData = (data) => {
	return{
		type: 'USER_LIST_SUCCESS',
		payload: data
	};
};