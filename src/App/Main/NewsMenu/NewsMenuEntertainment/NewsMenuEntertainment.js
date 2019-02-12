import React from 'react'
import newsMenuEntertainmentList from './newsMenuEntertainmentList'
import NewsMenuEntertainmentArticle from './NewsMenuEntertainmentArticle/NewsMenuEntertainmentArticle'

const NewsMenuEntertainment = () => {
    return (
        <div className='news-menu-entertainment-articles'>
            {
                newsMenuEntertainmentList.map(({
                    newsMenuEntertainmentTitle,
                    newsMenuEntertainmentId,
                    newsMenuEntertainmentImg
                }) => (
                    <React.Fragment key={newsMenuEntertainmentId}>
                        <NewsMenuEntertainmentArticle
                            newsMenuEntertainmentTitle={newsMenuEntertainmentTitle}
                            newsMenuEntertainmentImg={newsMenuEntertainmentImg}
                            newsMenuEntertainmentId={newsMenuEntertainmentId}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default NewsMenuEntertainment