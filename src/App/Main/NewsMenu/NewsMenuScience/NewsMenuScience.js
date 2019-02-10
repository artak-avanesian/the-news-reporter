import React from 'react'
import newsMenuScienceList from './newsMenuScienceList'
import './NewsMenuScience.css'

const NewsMenuScience = () => {
    return (
        <div className='news-menu-science-articles'>
            {
                newsMenuScienceList.map(({
                    newsMenuScienceId,
                    newsMenuScienceTitle,
                    newsMenuScienceArticle,
                }) => (
                    <div className=''>

                    </div>
                ))
            }
        </div>
    )
}

export default NewsMenuScience