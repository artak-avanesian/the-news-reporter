import React from 'react'
import NewsMenuSportsArticle from './NewsMenuSportsArticle/NewsMenuSportsArticle'
import newsMenuSportsList from './newsMenuSportsList'

const NewsMenuSports = () => {
    return (
        <div className='news-menu-sports-articles'>
            {
                newsMenuSportsList.map(({
                    newsMenuSportsTitle,
                    newsMenuSportsId,
                    newsMenuSportsImg
                }) => (
                    <React.Fragment key={newsMenuSportsId}>
                        <NewsMenuSportsArticle
                            newsMenuSportsTitle={newsMenuSportsTitle}
                            newsMenuSportsImg={newsMenuSportsImg}
                            newsMenuSportsId={newsMenuSportsId}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default NewsMenuSports