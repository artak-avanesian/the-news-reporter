import React from 'react'
import './DeskArticle.css'

const DeskArticle = ({
    desk_art_title,
    desk_art_description,
    update_time,
}) => {
    return (
        <div className='desk-article'>
            <h5>{desk_art_title}</h5>
            <p>{desk_art_description}</p>
            <a href="#" className="desk-read-more read-more">Read more</a>
            <p className="update-time">{update_time} ago</p>
        </div>
    )
}

export default DeskArticle