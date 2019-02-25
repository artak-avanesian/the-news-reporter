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
                picture_of_video
            }) => (
                <div className='video-wrapper' key={video_id}>
                    <Video
                        video_title={video_title}
                        picture_of_video={picture_of_video}
                        video_id={video_id}
                    />
                </div> 
            ))
        }
        </div>
    ) 
}

export default Videos