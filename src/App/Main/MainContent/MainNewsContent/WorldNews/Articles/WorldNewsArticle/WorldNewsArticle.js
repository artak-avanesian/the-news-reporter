import React from 'react'
import {Link} from 'react-router-dom'
import './WorldNewsArticle.css'

const Article = ({
    title,
    description,
    world_news_article
}) => {
    return (
        <div className='article'>
            <div className="image"></div>
            <div className="description">
                <h5>{title}</h5>
                <p>{description}</p>
                <Link to={world_news_article} className="read-more">Read more</Link>
            </div>
        </div>
    )
}

export default Article
