import React from 'react'
import './LeftArrow.css'

export default ({
    goToPrevSlide
}) => (
    <div className="backArrow" onClick={() => goToPrevSlide()}>
        <span>&#10094;</span>
    </div>
)