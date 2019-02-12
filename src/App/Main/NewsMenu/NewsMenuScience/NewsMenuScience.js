import React from 'react'
import newsMenuScienceList from './newsMenuScienceList'
import NewsMenuScienceArticle from './NewsMenuScienceArticle/NewsMenuScienceArticle'

const NewsMenuScience = () => {
    return (
        <div className='news-menu-science-articles'>
            {
                newsMenuScienceList.map(({
                    newsMenuScienceId,
                    newsMenuScienceTitle,
                    newsMenuScienceImg,
                }) => (
                    <React.Fragment key={newsMenuScienceId}>
                        <NewsMenuScienceArticle
                            newsMenuScienceTitle={newsMenuScienceTitle}
                            newsMenuScienceImg={newsMenuScienceImg}
                            newsMenuScienceId={newsMenuScienceId}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default NewsMenuScience