import React from 'react'
import { Link } from 'react-router-dom'

const ArticleItem = ({
    art_list_title,
    art_list_description,
    art_list_id
}) => {
    return (
        <div className='article'>
            <div className="image"></div>
            <div className="description">
                <h5>{art_list_title}</h5>
                <p>{art_list_description}</p>
                <Link to={`latest-articles/${art_list_id}`} className="read-more">Read more</Link>
            </div>
        </div>
    )
}

export default ArticleItem