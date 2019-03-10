import React from 'react'
import techNewsBlocks, { getTechNewsBlocks } from './../TechNewsArticles/techNewsBlocks'

const TechNewsArticlePage = ({
    match,
    techArticleItem = getTechNewsBlocks(techNewsBlocks)
}) => {
    return (
        <article className='tech-news-item'>
            <h2>{techArticleItem[match.params.techNewsArticleId].title_tech}</h2>
            {
                techArticleItem[match.params.techNewsArticleId].article_tech.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))
            }
        </article>
    )
}

//css properties locate in WorldNewsPage.css

export default TechNewsArticlePage