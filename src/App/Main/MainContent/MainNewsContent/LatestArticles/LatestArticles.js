import React from 'react'
import LatestArticlesTitle from './LatestArticlesTitle/LatestArticlesTitle'
import ArticlesList from './ArticlesList/ArticlesList'

const LatestArticles = () => {
    return (
        <div className='latest-articles'>
            <LatestArticlesTitle/>
            <ArticlesList/>
        </div>
    )
}

export default LatestArticles