import React from 'react'
import { Link } from 'react-router-dom'

const LatestArticlesTitle = () => {
    return (
        <div className="title">
            <p>Latest Articles</p>
            <Link to='/latest-news' className="more">More +</Link>
        </div>
    )
}

export default LatestArticlesTitle