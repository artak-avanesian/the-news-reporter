import React from 'react'
import './FavouriteLatestArticleItem.css'

const FavouriteArticle = ({
    favouriteLatestArticleImage,
    favouriteLatestArticleDescription,
    favouriteLatestArticleTitle,
}) => {
    return (
        <div className='favourite-article-wrapper'>
            <div className={favouriteLatestArticleImage}></div>
            <div className="description">
                <h5>{favouriteLatestArticleTitle}</h5>
                <p className='description'>{favouriteLatestArticleDescription}</p>
            </div>
        </div> 
    )
}

export default FavouriteArticle