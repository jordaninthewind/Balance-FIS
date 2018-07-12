const setMeditationSessions = (meditationSessions) => {
	return { type: "GET_USER_MEDITATION_SESSIONS", meditationSessions }
}

export const getUserMeditationSessions = (currentUser) => dispatch => {
	fetch('http://localhost:3001/', {mode: 'cors', creditials: 'include'})
		.then(res => res.json())
		.then(json => dispatch(setMeditationSessions(json)))
}

const initialState = {
	meditationSessions: [],
}

export default function meditationSessionsReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_USER_MEDITATION_SESSIONS":
			return {
				...state,
				meditationSessions: action.meditationSessions,
			}
		default:
			return state;
	}

};