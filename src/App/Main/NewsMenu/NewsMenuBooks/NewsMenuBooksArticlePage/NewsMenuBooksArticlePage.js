import React from 'react'
import newsMenuBooksList, { getNewsMenuBooksMap } from './../newsMenuBooksList'

const NewsMenuBooksArticlePage = ({
    match,
    booksMap = getNewsMenuBooksMap(newsMenuBooksList)
}) => {
    return (
        <article className='news-menu-books-article-page'>
            <div className={booksMap[match.params.newsMenuBooksId].newsMenuBooksImg}></div>
            <h2>{booksMap[match.params.newsMenuBooksId].newsMenuBooksTitle}</h2>
            {
                booksMap[match.params.newsMenuBooksId].newsMenuBooksArticle.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))
            }
        </article>
    )
}

//css properties locate in NewsMenuMoviesArticlePage.css

export default NewsMenuBooksArticlePage