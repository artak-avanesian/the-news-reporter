import React from 'react'
import Article from './Article/Article'
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
            }) => (
                <div className='article-wrapper' key={id}>
                    <Article
                        title={title}
                        description={description}
                    />
                </div>
            ))
        }
        </div>
    )
}

export default Articles