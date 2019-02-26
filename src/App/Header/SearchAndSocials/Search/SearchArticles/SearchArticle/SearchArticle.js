import React from 'react'
import { Link } from 'react-router-dom' 
import './SearchArticle.css'

export default ({
    title,
    img,
    description,
    link
}) => (
    <div className='search-article'>
        <div className={img}>{img ? null : <p>no image</p>}</div>
        <Link to={link}><h5>{title}</h5></Link>
        <div>{description !== 'Sometexthere' ? <p>{description}</p> : null}</div>
    </div>
)