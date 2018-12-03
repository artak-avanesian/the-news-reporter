import React from 'react';
import './SocialMedia.css'
import twitter from './twitter.jpg'
import fb from './fb.jpg'
import wiFi from './wi-fi.jpg'
import fbLikes from './fb-likes.jpg'
import counter from './counter.jpg'

const SocialImage = ({
    image,
}) => {
    return (
        <div className='social-media'>
            <img src={twitter} alt=""/>
            <img src={fb} alt=""/>
            <img src={wiFi} alt=""/>
            <img src={fbLikes} alt=""/>
            <img src={counter} alt=""/>
        </div>
    )
}

export default SocialImage;