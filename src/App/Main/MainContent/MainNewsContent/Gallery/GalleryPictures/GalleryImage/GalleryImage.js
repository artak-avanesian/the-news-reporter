import React, { Component } from 'react'
import Slide from './Slide/Slide'
import LeftArrow from './LeftArrow/LeftArrow'
import RightArrow from './RightArrow/RightArrow'
import gallery_list from './../../gallery_list'
import './GalleryImage.css'

class GalleryImage extends Component {

    state = {
        display: 'none',
        currentIndex: 1,
        translateRight: true
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

    goToNextSlide = () => {
        if(this.state.currentIndex === gallery_list.length) {
            return this.setState({
              currentIndex: 1,
              translateRight: true
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateRight: true
        }));
    }

    goToPrevSlide = () => {
        if(this.state.currentIndex === 1) {
            return this.setState({
              currentIndex: gallery_list.length,
              translateRight: false
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateRight: false
        }));
    }

    getCurrentIndex = img => {
        gallery_list.forEach((image, index) => {
            if (image.slideImg === img) this.setState({
                currentIndex: index + 1
            })
        })
    }

    render() {
        const {
            galleryImg,
            slideImg
        } = this.props
        return (
            <div className='gal-image-wrapper'>
                <div className={galleryImg} onClick={() => {
                    this.getCurrentIndex(slideImg)
                    this.modalChangeHandler()}}/>
                <div className='modalImg' style={{display: this.state.display}}>
                    <span className='close' onClick={() => this.close()}>&times;</span>
                    <div className='slider modal-content'>
                        <div className='slider-wrapper'>
                            <Slide
                                key={this.state.currentIndex}
                                currentIndex={this.state.currentIndex}
                                translateRight={this.state.translateRight}
                            />
                        </div>
                        <LeftArrow
                            goToPrevSlide={this.goToPrevSlide}
                        />
                        <RightArrow
                            goToNextSlide={this.goToNextSlide}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default GalleryImage