import React from 'react'
import './Video.css'
import { Link } from 'react-router-dom'

const Video = ({
    video_title,
    picture_of_video,
    video_id
}) => {
    return (
        <div className='video'>
            <div className={picture_of_video}/>
            <Link to={`/videos/${video_id}`}>{video_title}</Link>
        </div>
    )
}

export default Video