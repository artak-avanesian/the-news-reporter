import React from 'react'
import { keys } from 'lodash'
import articlesBlock, { getWorldNewsMap } from '../../../App/Main/MainContent/MainNewsContent/WorldNews/Articles/articlesBlock'
import FavouriteArticle from './FavouriteArticle/FavouriteArticle'
import { connect } from 'react-redux'
import './Favourites.css'
import articlesList, { getLatestArticlesMap } from './../../../App/Main/MainContent/MainNewsContent/LatestArticles/ArticlesList/articles_list';
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
    console.log(isLikedProduct)
    return (
        <div className='favourites-articles'>
        {
            isLikedProduct.map((likeId) => {
                if (likeId.indexOf('world') === 0) return (<div key={likeId}>
                    <FavouriteArticle
                        favouriteArticleImage={favouritesMap[likeId].favouriteImg}
                        favouriteArticleTitle={favouritesMap[likeId].title}
                        favouriteArticleDescription={favouritesMap[likeId].description}
                    />
                </div>)
                else return (<div key={likeId}>
                    <FavouriteLatestArticleItem
                        favouriteLatestArticleImage={favouritesLatestArticlesMap[likeId].artListImg}
                        favouriteLatestArticleTitle={favouritesLatestArticlesMap[likeId].art_list_title}
                        favouriteLatestArticleDescription={favouritesLatestArticlesMap[likeId].art_list_description}
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