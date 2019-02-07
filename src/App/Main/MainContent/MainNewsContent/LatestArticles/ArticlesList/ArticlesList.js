import React from 'react'
import ArticleItem from './ArticleItem/ArticleItem'
import articles_list from './articles_list'
import './ArticleList.css'

const ArticlesList = () => {
    return (
        <div className='articles'>
        {
            articles_list.map(({
                art_list_title,
                art_list_description,
                art_list_id,
            }) => (
                <div className='article-wrapper' key={art_list_id}>
                    <ArticleItem
                        art_list_title={art_list_title}
                        art_list_description={art_list_description}
                        art_list_id={art_list_id}
                    />
                </div>
            ))
        }
        </div>
    )
}

export default ArticlesList