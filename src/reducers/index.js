//combines all reducers using the combineReducer function from redux library.
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
	libraries: LibraryReducer
});

