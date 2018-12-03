import React from 'react'
import Video from './Video/Video'
import videos_list from './videos_list'
import './Videos.css'

const Videos = () => {
    return (
        <div className='videos'>
        {
            videos_list.map(({
                video_title,
                video_id,
            }) => (
                <div className='video-wrapper' key={video_id}>
                    <Video
                        video_title={video_title}
                    />
                </div> 
            ))
        }
        </div>
    ) 
}

export default Videos