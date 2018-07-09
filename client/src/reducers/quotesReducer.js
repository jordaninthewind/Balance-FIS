const setQuotes = (quotes) => {
	return { type: "GET_ALL_QUOTES", quotes }
}

export const getAllQuotes = () => dispatch => {
	fetch('http://localhost:3001/quotes.json', {mode: 'cors', creditials: 'include'})
		.then(res => res.json())
		.then(json => dispatch(setQuotes(json)))
}

const initialState = {
	quotes: [],
}

export default function quotesReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL_QUOTES":
			return {
				...state,
				quotes: action.quotes,
			}
		default:
			return state;
	}

};