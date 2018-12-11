import React from 'react'
import {Link} from 'react-router-dom'
import './WorldNewsArticle.css'

const Article = ({
    title,
    description,
    id
}) => {
    return (
        <div className='article'>
            <div className="image"></div>
            <div className="description">
                <h5>{title}</h5>
                <p>{description}</p>
                <Link to={`world-news-articles/${id}`} className="read-more">Read more</Link>
            </div>
        </div>
    )
}

export default Article
