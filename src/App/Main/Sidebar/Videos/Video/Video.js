import React from 'react'
import './Video.css'
import { Link } from 'react-router-dom'

const Video = ({
    video_title,
}) => {
    return (
        <div className='video'>
            <div className="video-block">
                <span>A</span>
            </div>
            <Link to="" className="video-description">{video_title}</Link>
        </div>
    )
}

export default Video