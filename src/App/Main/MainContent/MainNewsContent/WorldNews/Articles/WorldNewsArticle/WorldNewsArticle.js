import React from 'react'
import { Link } from 'react-router-dom'
import './WorldNewsArticle.css'

const Article = ({
    title,
    description,
    id,
    isLiked,
    likeOn,
    likeOff
}) => {
    return (
        <div className='article'>
            <div className="image"></div>
            <div className="description">
                <h5>{title}</h5>
                <p>{description}</p>
                <Link to={`world-news-articles/${id}`} className="read-more">Read more</Link>
                <span className='like' onClick={() => {
                    if (isLiked[id]) likeOff(id);
                    else likeOn(id);
                }}>{isLiked[id] ? <span>&#9829;</span> : <span>&#9825;</span>}</span>
            </div>
        </div>
    )
}

export default Article
