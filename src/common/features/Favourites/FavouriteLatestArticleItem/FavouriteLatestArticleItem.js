import React from 'react'
// import './FavouriteArticle.css'

const FavouriteArticle = ({
    favouriteLatestArticleImage,
    favouriteLatestArticleDescription,
    favouriteLatestArticleTitle,
}) => {
    return (
        <div className='favourite-article-wrapper'>
            <img src={favouriteLatestArticleImage} alt="" width='170' height='140'/>
            <div className="description">
                <h5>{favouriteLatestArticleTitle}</h5>
                <p className='description'>{favouriteLatestArticleDescription}</p>
            </div>
        </div> 
    )
}

export default FavouriteArticle