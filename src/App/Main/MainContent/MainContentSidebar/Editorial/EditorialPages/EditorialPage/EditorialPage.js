import React from 'react'
import './EditorialPage.css'
import { Link } from 'react-router-dom'

const EditorialPage = ({
    editorial_title,
    editorial_id
}) => {
    return (
        <div className="editorial-page">
            <div className="editorial-image"></div>
            <Link to={`/editorial/${editorial_id}`}>
                <h5 className="editorial-description">{editorial_title}</h5>
            </Link>
        </div>
    )
}

export default EditorialPage