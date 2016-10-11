//combines all reducers using the combineReducer function from redux library.
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	//assigned LibraryReducer to libraries key (key indicates how it will appear on state object)
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});

