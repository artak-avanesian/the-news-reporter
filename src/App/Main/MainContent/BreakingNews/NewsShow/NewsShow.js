import React from 'react'
import './NewsShow.css'

const NewsShow = ({
    newsShowTitle,
}) => {
    return (
        <div className="news-show">
            <div className="news-show-description">
                <p>{newsShowTitle}</p>
            </div>
        </div>
    )
}

export default NewsShow