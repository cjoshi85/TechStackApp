import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectedLibraryReducer from './SelectedLibrary';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectedLibraryReducer
});
