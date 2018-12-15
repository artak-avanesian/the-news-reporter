import React from 'react'
import articlesBlock, { getWorldNewsMap } from '../../../App/Main/MainContent/MainNewsContent/WorldNews/Articles/articlesBlock'
import FavouriteArticle from './FavouriteArticle/FavouriteArticle'
import './Favourites.css'

const Favourites = ({
    isLiked,
    favouritesMap = getWorldNewsMap(articlesBlock)
}) => {
    const like = () => {
        var likeActiveArray = [];
        for (var key in isLiked) {
            if (isLiked[key] === true) likeActiveArray.push(key);
            else {
                for (var i = 0; i < likeActiveArray.length; i++) {
                    if (key === likeActiveArray[i]) likeActiveArray.splice(i, 1);
                }
            }
        }
        return likeActiveArray;
    }
    return (
        <div className='favourites-articles'>
        {
            like().map((likeId) => (
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