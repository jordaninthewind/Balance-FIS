const initialState = {
	meditationSessions: [],
}

const setMeditationSessions = (meditationSessions) => {
	return { type: "GET_USER_MEDITATION_SESSIONS", meditationSessions }
}

export const removeMeditationSessions = () => {
	return { type: "RESET_USER_MEDITATION_SESSIONS" }
}

export const getUserMeditationSessions = (currentUser) => dispatch => {
	fetch(`http://localhost:3001/users/${currentUser.id}/meditation_sessions.json`) // , {mode: 'cors', creditials: 'include' })
		.then(res => { return res.json() })
		.then(json => { dispatch(setMeditationSessions(json))})
}

export default function meditationSessionsReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_USER_MEDITATION_SESSIONS":
			return {
				...state,
				meditationSessions: action.meditationSessions,
			}
		case "RESET_USER_MEDITATION_SESSIONS":
			return {
				...state,
				meditationSessions: [],
			}
		default:
			return state;
	}
}