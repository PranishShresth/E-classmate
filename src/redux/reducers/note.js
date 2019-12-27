import { GET_NOTE } from '../actions/types';

const initialState = {
	note: []
};

const noteReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_NOTE:
			return {
				...state,
				note: action.payload
			};
		default:
			return state
	}
};

export default noteReducer;