import React from 'react'
import './Article.css'

const Article = ({
    title,
    description,
}) => {
    return (
        <div className='article'>
            <div className="image"></div>
            <div className="description">
                <h5>{title}</h5>
                <p>{description}</p>
                <a href="article_1.html" target='_blank' className="read-more">Read more</a>
            </div>
        </div>
    )
}

export default Article
