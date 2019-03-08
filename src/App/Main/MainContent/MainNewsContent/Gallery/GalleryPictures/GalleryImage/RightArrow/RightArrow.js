import React from 'react'

export default ({
    goToNextSlide
}) => (
    <div className="nextArrow" onClick={() => goToNextSlide()}>
        <span>&#10095;</span>
    </div>
)

//css properties locate in LeftArrow.css