import React from 'react'
import newsMenuTechList from './newsMenuTechList'
import NewsMenuTechArticle from './NewsMenuTechArticle/NewsMenuTechArticle'

const NewsMenuTech = () => {
    return (
        <div className='news-menu-tech-articles'>
            {
                newsMenuTechList.map(({
                    newsMenuTechTitle,
                    newsMenuTechId,
                    newsMenuTechImg
                }) => (
                    <React.Fragment key={newsMenuTechId}>
                        <NewsMenuTechArticle
                            newsMenuTechTitle={newsMenuTechTitle}
                            newsMenuTechImg={newsMenuTechImg}
                            newsMenuTechId={newsMenuTechId}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default NewsMenuTech