import React from 'react'
import newsMenuBusinessList from './newsMenuBusinessList'
import NewsMenuBusinessArticle from './NewsMenuBusinessArticle/NewsMenuBusinessArticle'

const NewsMenuBusiness = () => {
    return (
        <div className='news-menu-business-articles'>
            {
                newsMenuBusinessList.map(({
                    newsMenuBusinessTitle,
                    newsMenuBusinessId,
                    newsMenuBusinessImg
                }) => (
                    <React.Fragment key={newsMenuBusinessId}>
                        <NewsMenuBusinessArticle
                            newsMenuBusinessTitle={newsMenuBusinessTitle}
                            newsMenuBusinessImg={newsMenuBusinessImg}
                            newsMenuBusinessId={newsMenuBusinessId}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default NewsMenuBusiness