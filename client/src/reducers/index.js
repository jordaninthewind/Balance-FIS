import quotesReducer from './quotesReducer';
import usersReducer from './usersReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	quotesReducer,
	usersReducer,
})

export default rootReducer;