import React from 'react'
import SocialMedia from './SocialMedia/SocialMedia'
import Search from './Search/Search'
import './SearchAndSocials.css'

const SearchAndSocials = () => {
    return (
        <div className="search-and-socials">
            <SocialMedia/>
            <Search/>    
        </div>
    )
}

export default SearchAndSocials