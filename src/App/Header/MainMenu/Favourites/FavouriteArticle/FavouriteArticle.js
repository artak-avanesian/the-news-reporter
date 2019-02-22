import React from 'react'
import './FavouriteArticle.css'
import { Link } from 'react-router-dom'

const FavouriteArticle = ({
    favouriteArticleTitle,
    favouriteArticleDescription,
    favouriteArticleImage,
    favouriteArticleLink
}) => {
    return (
        <div className='favourite-article-wrapper'>
            <div className={favouriteArticleImage}></div>
            <div className="description">
                <Link to={favouriteArticleLink}><h5>{favouriteArticleTitle}</h5></Link>
                <p className='description'>{favouriteArticleDescription}</p>
            </div>
        </div> 
    )
}

export default FavouriteArticle