import React from 'react'
import WorldNewsArticle from './WorldNewsArticle/WorldNewsArticle'
import articlesBlock from './articlesBlock'
import './Articles.css'


const Articles = () => {
    return (
        <div className='articles'>
        {
            articlesBlock.map(({
                title,
                description,
                id,
                world_news_article,
            }) => (
                <div className='article-wrapper' key={id}>
                    <WorldNewsArticle
                        title={title}
                        description={description}
                        world_news_article={world_news_article}
                    />
                </div>
            ))
        }
        </div>
    )
}

export default Articles