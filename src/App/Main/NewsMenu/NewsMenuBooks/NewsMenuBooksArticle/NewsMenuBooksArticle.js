import React from 'react'
import './NewsMenuBooksArticle.css'
import {Link} from 'react-router-dom'

const NewsMenuBooksArticle = ({
    newsMenuBooksTitle,
    newsMenuBooksImg,
    newsMenuBooksId
}) => {
    return (
        <article className='news-menu-books-article'>
            <div className={newsMenuBooksImg}></div>
            <Link to={`news-menu/books/${newsMenuBooksId}`}>
                <h5>{newsMenuBooksTitle}</h5>
            </Link>
        </article>
    )
}

//some css properties locate in NewsMenuWorldNewsArticle.css

export default NewsMenuBooksArticle