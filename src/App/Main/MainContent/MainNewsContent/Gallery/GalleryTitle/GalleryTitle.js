import React from 'react'
import { Link } from 'react-router-dom'

const GalleryTitle = () => {
    return (
        <div className='title'>
            <p>Gallery</p>
            <Link to='/gallery' className="more">More +</Link>
        </div>
    )
}

export default GalleryTitle