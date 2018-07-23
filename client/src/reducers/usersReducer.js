
const initialState = {
	users: [],
	currentUser: null,
}

const setUsers = (users) => {
	return { type: "GET_ALL_USERS", users }
}

export const getAllUsers = () => dispatch => {
	return fetch('http://localhost:3001/users.json', {mode: 'cors', creditials: 'include'})
		.then(res => {return res.json()})
		.then(json => dispatch(setUsers(json)))
}

export const setCurrentUser = (user) => {
	return { type: "SET_CURRENT_USER", user }
}

export const createUser = (name, location) => dispatch => {
	fetch("http://localhost:3001/users", {
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	      method: "POST",
	      body: JSON.stringify({new_user: {name: name, location: location}})
	    })
	    .then(res => { return res.json() })
	    .then(json =>{ dispatch(setCurrentUser(json)) })
	    .catch((res) =>{ console.log(res) })
}

export const deleteCurrentUser = () => {
	return { type: "DELETE_USER" }
}

export const deleteUser = (user) => dispatch => {
	fetch(`http://localhost:3001/users/${user.id}`, {
		headers: {'Content-Type': 'application/json'},
		method: "DELETE"
		})
		.then(res => { return res.json() })
		.then(json => dispatch(deleteCurrentUser()))
}

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL_USERS":
			return {
				...state,
				users: action.users,
			}
		case "SET_CURRENT_USER":
			return { 
				...state,
				currentUser: action.user,
			}
		case "DELETE_USER":
			return {
				...state,
				currentUser: null,
			}
		default:
			return state;
	}
};