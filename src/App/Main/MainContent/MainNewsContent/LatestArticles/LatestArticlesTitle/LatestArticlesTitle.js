import React from 'react'
import { Link } from 'react-router-dom'

const LatestArticlesTitle = () => {
    return (
        <div className="title">
            <p>Latest Articles</p>
            <Link to='#' className="more">More +</Link>
        </div>
    )
}

export default LatestArticlesTitle