import React from 'react'
import { Link } from 'react-router-dom'
import './TechNewsArticle.css'

const TechNewsArticle = ({
    title_tech,
    description_tech,
    author,
    comments,
    tech_id,
}) => {
    return (
        <div className='tech-news-article'>
            <h5><Link to={`/tech-news/${tech_id}`} className='tech-article'>{title_tech}</Link></h5>
            <p className='descript'>{description_tech}</p>
            <p className="author">by <span className="red-text">{author}</span></p>
            <p className="comments">{comments} comments</p>
        </div>
    )
}

export default TechNewsArticle