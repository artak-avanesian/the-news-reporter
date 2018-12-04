import React from 'react'
import NewsMenuWorldNewsArticle from './NewsMenuWorldNewsArticle/NewsMenuWorldNewsArticle'
import newsMenuWorldNewsArticles from './newsMenuWorldNewsArticles'

const NewsMenuWorldNews = () => {
    return (
        <div>
            {
                newsMenuWorldNewsArticles.map(({
                    newsMenuWorldNewsDescription,
                    newsMenuWorldNewsId,
                }) => (
                    <div className='news-menu-world-news-wrapper' key={newsMenuWorldNewsId}>
                        <NewsMenuWorldNewsArticle
                        newsMenuWorldNewsDescription={newsMenuWorldNewsDescription}
                    />
                    </div>
                ))
            }
        </div>
    )
}

export default NewsMenuWorldNews