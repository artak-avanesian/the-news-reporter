import React from 'react'
import newsMenuBooksList from './newsMenuBooksList'
import NewsMenuBooksArticle from './NewsMenuBooksArticle/NewsMenuBooksArticle'

const NewsMenuBooks = () => {
    return (
        <div className='news-menu-books-articles'>
            {
                newsMenuBooksList.map(({
                    newsMenuBooksTitle,
                    newsMenuBooksId,
                    newsMenuBooksImg
                }) => (
                    <React.Fragment key={newsMenuBooksId}>
                        <NewsMenuBooksArticle
                            newsMenuBooksTitle={newsMenuBooksTitle}
                            newsMenuBooksImg={newsMenuBooksImg}
                            newsMenuBooksId={newsMenuBooksId}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default NewsMenuBooks