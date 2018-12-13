import React from 'react'
import { keys } from 'lodash'
import articlesBlock, { getWorldNewsMap } from '../../../App/Main/MainContent/MainNewsContent/WorldNews/Articles/articlesBlock'
import FavouriteArticle from './FavouriteArticle/FavouriteArticle'
import './Favourites.css'

const Favourites = ({
    isLiked,
    favouritesMap = getWorldNewsMap(articlesBlock)
}) => {
    return (
        <div className='favourites-articles'>
        {
            keys(isLiked).map((likeId) => (
                <div key={likeId}>
                    <FavouriteArticle
                        favouriteArticleImage={favouritesMap[likeId].img_src}
                        favouriteArticleTitle={favouritesMap[likeId].title}
                        favouriteArticleDescription={favouritesMap[likeId].description}
                    />
                </div>
            ))
        }
        </div>
    )
}

export default Favourites