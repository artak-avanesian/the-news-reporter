import React from 'react'
import './TechNewsArticle.css'

const TechNewsArticle = ({
    title_tech,
    description_tech,
    author,
    comments,
}) => {
    return (
        <div className='tech-news-article'>
            <h5>{title_tech}</h5>
            <p className='descript'>{description_tech}</p>
            <p className="author">by <span className="red-text">{author}</span></p>
            <p className="comments">{comments} comments</p>
        </div>
    )
}

export default TechNewsArticle