const initialState = {
	meditationSessions: [],
}

const setMeditationSessions = (meditationSessions) => {
	return { type: "GET_USER_MEDITATION_SESSIONS", meditationSessions }
}

export const resetMeditationSessions = () => {
	return { type: "RESET_USER_MEDITATION_SESSIONS" }
}

export const getUserMeditationSessions = (currentUser) => dispatch => {
	fetch(`http://localhost:3001/users/${currentUser.id}/meditation_sessions.json`) // , {mode: 'cors', creditials: 'include' })
		.then(res => { return res.json() })
		.then(json => { dispatch(setMeditationSessions(json))})
}

const removeMeditationSession = (session) => {
	return { type: "REMOVE_MEDITATION_SESSION", session}
}

export const deleteMeditationSession = (currentUser, session) => dispatch => {
	fetch(`http://localhost:3001/users/${currentUser.id}/meditation_sessions/${session}`, {
		method: "DELETE"
		})
		.then(() => { dispatch(removeMeditationSession(session))})
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
		case "REMOVE_MEDITATION_SESSION":
			return {
				...state,
				meditationSessions: state.meditationSessions.filter(sess => { return sess.id !== action.session }),
			}
		default:
			return state;
	}
}