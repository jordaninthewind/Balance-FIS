
const setUsers = (users) => {
	return { type: "GET_ALL_USERS", users }
}

const initialState = {
	users: [],
	currentUser: {},
}

export const getAllUsers = () => dispatch => {
	fetch('http://localhost:3001/users.json', {mode: 'cors', creditials: 'include'})
		.then(res => res.json())
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
	    .then((res) => { return res.json() })
	    .then(json => console.log(json))
	    .catch((res) =>{ console.log(res) })
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
		default:
			return state;
	}
};