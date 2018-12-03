import React from 'react'
import NewsShow from './NewsShow/NewsShow'
import BreakingNewsTitle from './BreakingNewsTitle/BreakingNewsTitle'
import newsShow from './newsShow'

import './BreakingNews.css'

const BreakingNews = () => {
    return (
        <section className="breaking-news">
            <NewsShow
                newsShowTitle={newsShow.newsShowTitle}
            />
            <BreakingNewsTitle/>
            <div className="current-news-show"></div>
            <div className="another-news-1"></div>
            <div className="another-news-2"></div>
            <div className="another-news-3"></div>
        </section>
    )
}

export default BreakingNews