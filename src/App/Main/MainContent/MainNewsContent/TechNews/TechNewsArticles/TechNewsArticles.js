import React from 'react'
import TechNewsArticle from './TechNewsArticle/TechNewsArticle'
import techNewsBlocks from './techNewsBlocks'
import './TechNewsArticles.css'

const TechNewsArticles = () => {
    return (
        <div className='tech-news-articles'>
        {
            techNewsBlocks.map(({
                id,
                title_tech,
                description_tech,
                author,
                comments,
            }) => (
                <div className='tech-news-article-wrapper' key={id}>
                    <TechNewsArticle
                        title_tech={title_tech}
                        description_tech={description_tech}
                        author={author}
                        comments={comments}
                    />
                </div>
            ))
        }
        </div>
    )
}

export default TechNewsArticles
