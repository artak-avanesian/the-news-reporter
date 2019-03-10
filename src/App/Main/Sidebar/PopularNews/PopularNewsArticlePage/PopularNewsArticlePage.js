import React from 'react'
import popular_list, { getPopularNewsMap } from './../popular_list'

const PopularNewsArticlePage = ({
    match,
    popularNewsMap = getPopularNewsMap(popular_list)
}) => {
    return (
        <article className='popular-news-item'>
            <h2>{popularNewsMap[match.params.popularNewsArticleId].popular_title}</h2>
            {
                popularNewsMap[match.params.popularNewsArticleId].popular_article.map((paragraph, i) => (<p key={i}>{paragraph}</p>))
            }
        </article>
    )
}

//css properties locate in WorldNewsPage.css

export default PopularNewsArticlePage