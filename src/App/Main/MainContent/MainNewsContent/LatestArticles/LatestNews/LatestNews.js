import React from 'react'
import articles_list from'./../ArticlesList/articles_list'
import LatestNewsAricle from './LatestNewsArticle/LatestNewsArticle'
import './LatestNews.css'

export default () => (
    <div className='latest-news'>
        {
            articles_list.map(({
                art_list_title,
                favouriteClass,
                art_list_id,
                art_list_link
            }) => (
                <React.Fragment key={art_list_id}>
                    <LatestNewsAricle
                        art_list_title={art_list_title}
                        favouriteClass={favouriteClass}
                        art_list_link={art_list_link}
                    />
                </React.Fragment>
            ))
        }
    </div>
)