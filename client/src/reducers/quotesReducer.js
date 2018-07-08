
const dummyQuotes = [
	{content: "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.", author: "Pema Chodron"}, 
	{content: "The most fundamental aggression to ourselves, the most fundamental harm we can do to ourselves, is to remain ignorant by not having the courage and the respect to look at ourselves honestly and gently.", author: "Pema Chodron"},
	{content: "You are the sky. Everything else – it’s just the weather.", author: "Pema Chodron"},
	{content: "Fear is a natural reaction to moving closer to the truth.", author: "Pema Chodron"},
	]

const initialState = {
	quotes: dummyQuotes,
}

export default function quotesReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL_QUOTES":
			return {
				...state,
				// quotes: action.quotes,
			}
		default:
			return state;
	}

};