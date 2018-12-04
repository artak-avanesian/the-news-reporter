import React from 'react'

const NewsMenuWorldNewsArticle = ({
    newsMenuWorldNewsDescription,
}) => {
    return (
        <div>
            <div className="news-menu-world-news-image"></div>
            <h5 className="news-menu-world-news-description">{newsMenuWorldNewsDescription}</h5>
        </div>
    )
}

export default NewsMenuWorldNewsArticle