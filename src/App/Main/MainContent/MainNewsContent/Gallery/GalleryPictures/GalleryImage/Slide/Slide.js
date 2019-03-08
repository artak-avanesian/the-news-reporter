import React from 'react'
import './Slide.css'

export default ({
    translateValue,
    currentIndex
}) => (
    <div className={`slide-${currentIndex} slide`} style={{
        transform: `translateX(${translateValue}px)`,
        transition: 'transform ease-out 0.45s',
    }}></div>
)