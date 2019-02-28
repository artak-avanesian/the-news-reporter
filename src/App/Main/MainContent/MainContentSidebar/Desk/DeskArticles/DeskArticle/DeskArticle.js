import React from 'react'
import './DeskArticle.css'
import { Link } from 'react-router-dom'

const DeskArticle = ({
    desk_art_title,
    desk_art_description,
    update_time,
    desk_art_id
}) => {
    return (
        <div className='desk-article'>
            <h5>{desk_art_title}</h5>
            <p>{desk_art_description}</p>
            <Link to={`/desk-news/${desk_art_id}`} className="desk-read-more read-more">Read more</Link>
            <p className="update-time">{update_time} ago</p>
        </div>
    )
}

export default DeskArticle