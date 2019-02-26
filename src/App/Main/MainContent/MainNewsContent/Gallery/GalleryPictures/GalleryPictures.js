import React, { Component } from 'react'
import galleryList from './../gallery_list'
import './GalleryPictures.css'

class GalleryPictures extends Component {
    
    state = {
        zoom: 'zoom' 
    }

    render() {
        return (
            <section className='gallery-pictures'>
                {
                    galleryList.map(({
                        galleryId,
                        galleryImg
                    }) => (
                        <div key={galleryId}>
                            <div className={galleryImg}/>
                        </div>
                    ))
                }
            </section>
        )
    }
}

export default GalleryPictures