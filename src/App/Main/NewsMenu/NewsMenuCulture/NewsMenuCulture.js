import React from 'react'
import newsMenuCultureList from './newsMenuCultureList'
import NewsMenuCultureArticle from './NewsMenuCultureArticle/NewsMenuCultureArticle'

const NewsMenuCulture = () => {
    return (
        <div className='news-menu-culture-articles'>
            {
                newsMenuCultureList.map(({
                    newsMenuCultureTitle,
                    newsMenuCultureId,
                    newsMenuCultureImg
                }) => (
                    <React.Fragment key={newsMenuCultureId}>
                        <NewsMenuCultureArticle
                            newsMenuCultureTitle={newsMenuCultureTitle}
                            newsMenuCultureImg={newsMenuCultureImg}
                            newsMenuCultureId={newsMenuCultureId}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default NewsMenuCulture