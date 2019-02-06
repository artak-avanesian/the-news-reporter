import React from 'react'
import NewsShow from './NewsShow/NewsShow'
import BreakingNewsTitle from './BreakingNewsTitle/BreakingNewsTitle'
import BreakingNewsImage from './BreakingNewsImage/BreakingNewsImage'
import news from './news'

import './BreakingNews.css'

const BreakingNews = () => {
    return (
        <section className="breaking-news">
            <NewsShow/>
            <BreakingNewsTitle/>
            <div>
            {
                news.map(({
                    breaking_news_id
                }) => (
                    <div className='breaking-news-wrapper' key={breaking_news_id}>
                        <BreakingNewsImage
                            breaking_news_id={breaking_news_id}
                        />
                    </div>
                ))
            }
            </div>
        </section>
    )
}



export default BreakingNews