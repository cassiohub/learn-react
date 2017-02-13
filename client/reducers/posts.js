function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES':
			console.log("posts reducer was called");
			console.log("action on posts reducer: ", action);
			console.log("state on posts reducer: ", state);
			const index = action.index;
			let newState = [
				...state.slice(0,index), 
				{ ...state[index], likes: state[index].likes + 1 },
				...state.slice(index + 1)
			]
			console.log("newState", newState);
			return newState;
		default:
			return state;	
	}
	
}

export default posts;