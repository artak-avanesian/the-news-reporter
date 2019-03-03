import React from 'react'
import { Link } from 'react-router-dom' 
import './SearchArticle.css'

export default ({
    title,
    img,
    link
}) => (
    <div className='search-article'>
        <div className={img}>{img ? null : <p>no image</p>}</div>
        <Link to={link}><h5>{title}</h5></Link>
    </div>
)