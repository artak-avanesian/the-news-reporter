import React from 'react'
import newsMenuMoviesList from './newsMenuMoviesList'
import NewsMenuMoviesArticle from './NewsMenuMoviesArticle/NewsMenuMoviesArticle'

const NewsMenuMovies = () => {
    return (
        <div className='news-menu-movies-articles'>
            {
                newsMenuMoviesList.map(({
                    newsMenuMoviesTitle,
                    newsMenuMoviesId,
                    newsMenuMoviesImg
                }) => (
                    <React.Fragment key={newsMenuMoviesId}>
                        <NewsMenuMoviesArticle
                            newsMenuMoviesTitle={newsMenuMoviesTitle}
                            newsMenuMoviesImg={newsMenuMoviesImg}
                            newsMenuMoviesId={newsMenuMoviesId}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default NewsMenuMovies