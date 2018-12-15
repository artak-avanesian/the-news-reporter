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
            }) => (
                <div className='article-wrapper' key={id}>
                    <WorldNewsArticle
                        title={title}
                        description={description}
                        id={id}
                        // isLiked={isLiked}
                        // likeOn={likeOn}
                        // likeOff={likeOff}
                    />
                </div>
            ))
        }
        </div>
    )
}

export default Articles