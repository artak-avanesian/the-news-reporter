import React, { Component } from 'react'
import './GalleryImage.css'

class GalleryImage extends Component {

    state = {
        display: 'none'
    }

    modalChangeHandler() {
        this.setState({
            display: 'block'
        })
    }

    close() {
        this.setState({
            display: 'none'
        })
    }

    render() {
        const {
            galleryImg
        } = this.props
        return (
            <div className='gal-image-wrapper'>
                <div className={galleryImg} onClick={() => this.modalChangeHandler()}/>
                <div className='modalImg' style={{display: this.state.display}}>
                    <span className='close' onClick={() => this.close()}>&times;</span>
                    <div className={`${galleryImg} modal-content`} ></div>
                </div>
            </div>
        )
    }
}

export default GalleryImage