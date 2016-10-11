//if state is undefined we set it to default to null to avoid error (nothing selected).
export default (state = null, action) => {
	console.log(action);
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state;
	}
};
