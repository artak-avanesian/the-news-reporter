import React from 'react'
import { keys } from 'lodash'
import articlesBlock, { getWorldNewsMap } from '../../../App/Main/MainContent/MainNewsContent/WorldNews/Articles/articlesBlock'
import FavouriteArticle from './FavouriteArticle/FavouriteArticle'
import { connect } from 'react-redux'
import './Favourites.css'

const Favourites = ({
    isLiked,
    favouritesMap = getWorldNewsMap(articlesBlock)
}) => {
    console.log(isLiked)
    // const like = () => {
    //     var likeActiveArray = [];
    //     for (var key in isLiked) {
    //         if (isLiked[key] === true) likeActiveArray.push(key);
    //         else {
    //             for (var i = 0; i < likeActiveArray.length; i++) {
    //                 if (key === likeActiveArray[i]) likeActiveArray.splice(i, 1);
    //             }
    //         }
    //     }
    //     return likeActiveArray;
    // }
    const isLikedProduct = keys(isLiked).filter((likeId) => {
        if (isLiked[likeId] === true) return true;
        else return false;
    })
    return (
        <div className='favourites-articles'>
        {
            isLikedProduct.map((likeId) => (
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

const mapStateToProps = (state, props) => {
    return {
        isLiked: state[props]
    }
}

export default connect(
    mapStateToProps
)(Favourites)