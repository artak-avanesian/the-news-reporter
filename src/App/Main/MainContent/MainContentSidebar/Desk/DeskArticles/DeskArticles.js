import React from 'react'
import DeskArticle from './DeskArticle/DeskArticle'
import desk_articles from './desk_articles'
import './DeskArticles.css'

const DeskArticles = () => {
    return (
        <div className='desk-articles'>
        {
            desk_articles.map(({
                desk_art_title,
                desk_art_description,
                update_time,
                desk_art_id,
            }) => (
                <div className='desk-article-wrapper' key={desk_art_id}>
                    <DeskArticle
                        desk_art_title={desk_art_title}
                        desk_art_description={desk_art_description}
                        update_time={update_time}
                        desk_art_id={desk_art_id}
                    />
                </div>
            ))
        }
        </div>
    )
}

export default DeskArticles