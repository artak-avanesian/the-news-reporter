import React from 'react'
import './FavouriteArticle.css'

const FavouriteArticle = ({
    favouriteArticleTitle,
    favouriteArticleDescription,
    favouriteArticleImage,
}) => {
    return (
        <div className='favourite-article-wrapper'>
            <div className={favouriteArticleImage}></div>
            <div className="description">
                <h5>{favouriteArticleTitle}</h5>
                <p className='description'>{favouriteArticleDescription}</p>
            </div>
        </div> 
    )
}

export default FavouriteArticle