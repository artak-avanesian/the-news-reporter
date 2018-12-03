import React from 'react';
import Logo from './Logo/Logo';
import MainMenu from './MainMenu/MainMenu';
import SearchAndSocials from './SearchAndSocials/SearchAndSocials';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='clearfix'>
                    <div className="flex-container">
                        <Logo/>
                        <MainMenu/>
                        <SearchAndSocials/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;