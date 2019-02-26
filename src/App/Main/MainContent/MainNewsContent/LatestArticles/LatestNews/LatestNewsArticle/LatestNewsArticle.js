import React from 'react'
import { Link } from 'react-router-dom'
import './LatestNewsArticle.css'

export default ({
    art_list_title,
    favouriteClass,
    art_list_link
}) => (
    <div className='latest-news-article'>
        <div className={favouriteClass}></div>
        <Link to={art_list_link}><h5>{art_list_title}</h5></Link>
    </div>
)