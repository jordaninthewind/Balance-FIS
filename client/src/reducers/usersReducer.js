
const setUsers = (users) => {
	return { type: "GET_ALL_USERS", users }
}

const initialState = {
	// users: Users,
	users: [],
}

export const getAllUsers = () => dispatch => {
	fetch('http://localhost:3001/users.json', {mode: 'cors', creditials: 'include'})
		.then(res => res.json())
		.then(json => dispatch(setUsers(json)))
}

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL_USERS":
			return {
				...state,
				users: action.users,
			}
		default:
			return state;
	}

};