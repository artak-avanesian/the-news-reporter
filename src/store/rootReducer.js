import articlesLikeReducer from './../common/features/Like/articleslikesreducer'
import currentNewsReducer from './../common/features/ChosenNews/currentnewsreducer'

const rootReducer = (state={}, action) => {
    return {
        likedProducts: articlesLikeReducer(state.likedProducts, action),
        currentNews: currentNewsReducer(state.currentNews, action)
    }
}

export default rootReducer