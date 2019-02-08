import React from 'react'
import { Link } from 'react-router-dom'

const TechNewsTitle = () => {
    return (
        <div className="title">
            <p>Tech news</p>
            <Link to='/tech' className="more">More +</Link>
        </div>
    )
}

export default TechNewsTitle