import React from 'react'
import NewsMenuWorldNewsArticle from './NewsMenuWorldNewsArticle/NewsMenuWorldNewsArticle'
import newsMenuWorldNewsArticles from './newsMenuWorldNewsArticles'
import './NewsMenuWorldNews.css'

const NewsMenuWorldNews = () => {
    return (
        <div className='news-menu-world-news-articles'>
            {
                newsMenuWorldNewsArticles.map(({
                    newsMenuWorldNewsTitle,
                    newsMenuWorldNewsId,
                }) => (
                    <div className='news-menu-world-news-wrapper' key={newsMenuWorldNewsId}>
                        <NewsMenuWorldNewsArticle
                        newsMenuWorldNewsTitle={newsMenuWorldNewsTitle}
                    />
                    </div>
                ))
            }
        </div>
    )
}

export default NewsMenuWorldNews