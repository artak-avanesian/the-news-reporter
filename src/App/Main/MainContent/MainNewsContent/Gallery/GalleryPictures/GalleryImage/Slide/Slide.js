import React from 'react'
import './Slide.css'

export default ({
    currentIndex,
    translateRight
}) => (
    <div className={`slide-${currentIndex} slide ${translateRight ? 'translateRight' : 'translateLeft'}`}></div>
)