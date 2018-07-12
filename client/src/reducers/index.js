import quotesReducer from './quotesReducer';
import usersReducer from './usersReducer';
import meditationSessionsReducer from './meditationSessionsReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	quotesReducer,
	usersReducer,
	meditationSessionsReducer,
})

export default rootReducer;