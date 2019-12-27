import axios from 'axios';

import { GET_NOTE } from './types';

// GET NOTE
export const getNote = () => (dispatch) =>  {
	console.log('Contacting API');
	axios.get('/api/note/')
		.then(response => {
			console.log('api contact');
			dispatch({
				type: GET_NOTE,
				payload: response.data
			});
		}).catch(error => console.log(error));
};