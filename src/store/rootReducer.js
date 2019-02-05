import articlesLikeReducer from './../common/features/Like/articleslikesreducer'

const rootReducer = (state={}, action) => {
    return {
        likedProducts: articlesLikeReducer(state.likedProducts, action)
    }
}

export default rootReducer