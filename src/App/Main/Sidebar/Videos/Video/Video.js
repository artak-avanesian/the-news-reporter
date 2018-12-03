import React from 'react'
import './Video.css'
const Video = ({
    video_title,
}) => {
    return (
        <div className='video'>
            <div className="video-block">
                <span>A</span>
            </div>
            <a href="" className="video-description">{video_title}</a>
        </div>
    )
}

export default Video