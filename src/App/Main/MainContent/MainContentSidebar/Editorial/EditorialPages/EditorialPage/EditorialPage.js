import React from 'react'
import './EditorialPage.css'

const EditorialPage = ({
    editorial_title
}) => {
    return (
        <div className="editorial-page">
            <div className="editorial-image"></div>
            <a href="#">
                <h5 className="editorial-description">{editorial_title}</h5>
            </a>
        </div>
    )
}

export default EditorialPage