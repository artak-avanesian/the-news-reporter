import React from 'react'
import { Link } from 'react-router-dom'
import './Search.css'

const Search = ({
    onSearch,
    value,
    valueChangeHandler
}) => {
    return (
        <div className='search'>
            <input 
                type='text' 
                name='search' 
                value={value}
                onChange={valueChangeHandler}
            />
            <Link to='/search'><button className='search-icon' onClick={() => onSearch(value)}/></Link>
        </div>    
    )
}


export default Search