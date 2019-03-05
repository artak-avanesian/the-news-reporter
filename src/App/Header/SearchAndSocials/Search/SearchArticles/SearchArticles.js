import React from 'react'
import SearchArticle from './SearchArticle/SearchArticle'

export default ({
    filteredArticles,
    search,
}) => {
    if (filteredArticles.length === 0 && search) return (
        <p className='search-no-result'>Sorry, there are no results for <span className='search-word-no-result'>{search}</span></p>
    )
    else if (filteredArticles.length > 0) return (
        <div className='search-articles-wrapper'>
            {
                filteredArticles.map(({
                    id,
                    title,
                    img,
                    article,
                    link
                }) => (
                    <React.Fragment key={id}>
                        <SearchArticle
                            title={title}
                            img={img}
                            article={article}
                            link={link}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
    else return (
        <div></div>
    )
}