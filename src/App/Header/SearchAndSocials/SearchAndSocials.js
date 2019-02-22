import React from 'react'
import SocialMedia from './SocialMedia/SocialMedia'
import Search from './Search/Search'
import './SearchAndSocials.css'

const SearchAndSocials = ({
    onSearch,
    value,
    valueChangeHandler,
    search
}) => {
    return (
        <div className="search-and-socials">
            <SocialMedia/>
            <Search
                onSearch={onSearch}
                value={value}
                valueChangeHandler={valueChangeHandler}
                search={search}
            />    
        </div>
    )
}

export default SearchAndSocials