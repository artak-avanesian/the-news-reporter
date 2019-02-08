import React from 'react'
import { Link } from 'react-router-dom'
import './Title.css'

const Title = () => {
    return (
        <div className="title">
            <p>From aroud the world</p>
            <Link to='/world-news' className="more">More +</Link>
        </div>
    )
}

export default Title