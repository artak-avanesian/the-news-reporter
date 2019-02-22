import React from 'react'
import { keys } from 'lodash'
import articlesBlock, { getWorldNewsMap } from './../../../Main/MainContent/MainNewsContent/WorldNews/Articles/articlesBlock'
import FavouriteArticle from './FavouriteArticle/FavouriteArticle'
import { connect } from 'react-redux'
import './Favourites.css'
import articlesList, { getLatestArticlesMap } from './../../../Main/MainContent/MainNewsContent/LatestArticles/ArticlesList/articles_list';
import FavouriteLatestArticleItem from './FavouriteLatestArticleItem/FavouriteLatestArticleItem'

const Favourites = ({
    isLiked,
    favouritesMap = getWorldNewsMap(articlesBlock),
    favouritesLatestArticlesMap = getLatestArticlesMap(articlesList)
}) => {
    const isLikedProduct = keys(isLiked).filter((likeId) => {
        if (isLiked[likeId] === true) return true;
        else return false;
    })
    return (
        <div className='favourites-articles'>
        {
            isLikedProduct.map((likeId) => {
                if (likeId.indexOf('world') === 0) return (
                <div key={likeId}>
                    <FavouriteArticle
                        favouriteArticleImage={favouritesMap[likeId].favouriteClass}
                        favouriteArticleTitle={favouritesMap[likeId].title}
                        favouriteArticleDescription={favouritesMap[likeId].description}
                        favouriteArticleLink={favouritesMap[likeId].link}
                    />
                </div>)
                else return (
                <div key={likeId}>
                    <FavouriteLatestArticleItem
                        favouriteLatestArticleImage={favouritesLatestArticlesMap[likeId].favouriteClass}
                        favouriteLatestArticleTitle={favouritesLatestArticlesMap[likeId].art_list_title}
                        favouriteLatestArticleDescription={favouritesLatestArticlesMap[likeId].art_list_description}
                        favouriteLatestArticleLink={favouritesLatestArticlesMap[likeId].art_list_link}
                    />
                </div>)
                
            })
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLiked: state.likedProducts    
    }
}

export default connect(
    mapStateToProps
)(Favourites)