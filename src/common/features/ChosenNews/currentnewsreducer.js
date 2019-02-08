const currentNewsReducer = (state={'breaking-news-show-1': true}, action) => {
    switch(action.type) {
        case 'CURRENT': {
            return {
                [action.id]: true
			}
		}
		default:
			return state
			
    }
}

export default currentNewsReducer