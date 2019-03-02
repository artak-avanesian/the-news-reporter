import React from 'react'
import './FavouriteLatestArticleItem.css'
import { Link } from 'react-router-dom'
const FavouriteArticle = ({
    favouriteLatestArticleImage,
    favouriteLatestArticleDescription,
    favouriteLatestArticleTitle,
    favouriteLatestArticleLink
}) => {
    return (
        <div className='favourite-article-wrapper'>
            <div className={favouriteLatestArticleImage}></div>
            <div className="description">
                <Link to={favouriteLatestArticleLink}><h5>{favouriteLatestArticleTitle}</h5></Link>
            </div>
        </div> 
    )
}

export default FavouriteArticle