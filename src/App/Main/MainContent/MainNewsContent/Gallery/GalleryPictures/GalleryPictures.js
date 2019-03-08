import React from 'react'
import galleryList from './../gallery_list'
import './GalleryPictures.css'
import GalleryImage from './GalleryImage/GalleryImage'

export default () => ( 
    <section className='pictures-of-gallery'>
        {
            galleryList.map(({
                galleryId,
                galleryImg,
                slideImg
            }) => (
                <React.Fragment key={galleryId}>
                    <GalleryImage
                        galleryImg={galleryImg}
                        slideImg={slideImg}
                    />
                </React.Fragment>
            ))
        }
    </section>
)

