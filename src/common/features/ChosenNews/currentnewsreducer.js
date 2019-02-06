const currentNewsReducer = (state={'breaking-news-show-1': true}, action) => {
    switch(action.type) {
        case 'CURRENT': {
            return {
                [action.id]: true
			}
		}
		case 'NOT_CURRENT': {
			return {
				[action.id]: false
			}
		}
		default:
			return state
			
    }
}

export default currentNewsReducer