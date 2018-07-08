

const Users = [
  {id: 0, name: "Jordan"}, 
  {id: 1, name: "Anna"}, 
  {id: 2, name: "Diego"}, 
  {id: 3, name: "Homer"}, 
  {id: 4, name: "Magellan"},
  {id: 5, name: "Phillip"},
];

const initialState = {
	users: Users,
	// users: [],
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