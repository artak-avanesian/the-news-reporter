import React from 'react'
import GalleryTitle from './GalleryTitle/GalleryTitle'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='gallery'>
            <GalleryTitle/>
            <div className="flex-container">
                <div className="image-gallery-1"></div>
                <div className="image-gallery-2"></div>
                <div className="image-gallery-3"></div>
                <div className="image-gallery-4"></div>
                <div className="image-gallery-5"></div>
                <div className="image-gallery-6"></div>
            </div> 
        </div>
    )
} 

export default Gallery