import React from 'react'
import SocialMedia from './SocialMedia/SocialMedia'
import Search from './Search/Search'
import './SearchAndSocials.css'

const SearchAndSocials = ({
    onSearch,
    value,
    valueChangeHandler,
    handlerKeyPress
}) => {
    return (
        <div className="search-and-socials">
            <SocialMedia/>
            <Search
                onSearch={onSearch}
                value={value}
                valueChangeHandler={valueChangeHandler}
                handlerKeyPress={handlerKeyPress}
            />    
        </div>
    )
}

export default SearchAndSocials