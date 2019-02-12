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
                    newsMenuWorldNewsImg
                }) => (
                    <React.Fragment key={newsMenuWorldNewsId}>
                        <NewsMenuWorldNewsArticle
                            newsMenuWorldNewsTitle={newsMenuWorldNewsTitle}
                            newsMenuWorldNewsImg={newsMenuWorldNewsImg}
                            newsMenuWorldNewsId={newsMenuWorldNewsId}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default NewsMenuWorldNews