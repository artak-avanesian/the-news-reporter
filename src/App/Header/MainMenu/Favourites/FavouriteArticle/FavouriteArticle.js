import React from 'react'
import './FavouriteArticle.css'
import { Link } from 'react-router-dom'

const FavouriteArticle = ({
    favouriteArticleTitle,
    favouriteArticleImage,
    favouriteArticleLink
}) => {
    return (
        <div className='favourite-article-wrapper'>
            <div className={favouriteArticleImage}></div>
            <div className="description">
                <Link to={favouriteArticleLink}><h5>{favouriteArticleTitle}</h5></Link>
            </div>
        </div> 
    )
}

export default FavouriteArticle