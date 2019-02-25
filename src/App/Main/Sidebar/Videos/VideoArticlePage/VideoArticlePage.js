import React from 'react'
import videos_list, { getVideosMap } from './../videos_list'
import './VideoArticlePage.css'

export default ({
    match,
    videoMap = getVideosMap(videos_list)
}) => {
    return (
        <article className='video-page'>
            <video src={videoMap[match.params.video_id].video_link} controls></video>
            <h2>{videoMap[match.params.video_id].video_title}</h2>
            <p>{videoMap[match.params.video_id].video_article}</p>
        </article>
    )
}
