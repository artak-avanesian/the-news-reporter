import React from 'react'
import { Link } from 'react-router-dom'
import './Search.css'

const Search = ({
    onSearch,
    value,
    valueChangeHandler,
    handlerKeyPress
}) => {
    return (
        <div className='search'>
            <input 
                type='search' 
                name='search' 
                value={value}
                onChange={valueChangeHandler}
                onKeyPress={handlerKeyPress}
            />
            <Link to='/search'>
                <button className='search-icon' 
                onClick={() => onSearch(value)}
                disabled={!value}/>
            </Link>
        </div>    
    )
}


export default Search