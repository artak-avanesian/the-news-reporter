import React from 'react'
import GalleryTitle from './GalleryTitle/GalleryTitle'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='gallery'>
            <GalleryTitle/>
            <div className="flex-container">
                <div className="gallery-image-1"></div>
                <div className="gallery-image-2"></div>
                <div className="gallery-image-3"></div>
                <div className="gallery-image-4"></div>
                <div className="gallery-image-5"></div>
                <div className="gallery-image-6"></div>
            </div> 
        </div>
    )
} 

export default Gallery