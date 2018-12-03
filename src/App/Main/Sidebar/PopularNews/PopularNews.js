import React from 'react'
import PopularNewsTitle from './PopularNewsTitle/PopularNewsTitle'
import PopularNewsArticle from './PopularNewsArticle/PopularNewsArticle'
import popular_list from './popular_list'
import './PopularNews.css'

const PopularNews = () => {
    return (
        <div className='popular-news'>
            <PopularNewsTitle/>
        {
            popular_list.map(({
                date,
                popular_title,
                popular_id
            }) => (
                <div className='popular-article-wrapper' key={popular_id}>
                    <PopularNewsArticle
                        date={date}
                        popular_title={popular_title}
                    />
                </div>
            ))
        }
            <a href='#' className="popular-more more">More +</a>
        </div>
    )
}

export default PopularNews