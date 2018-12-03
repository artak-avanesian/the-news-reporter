import React from 'react'
import Desk from './Desk/Desk'
import Editorial from './Editorial/Editorial'
import './MainContentSidebar.css'

const MainContentSidebar = () => {
    return (
        <aside className='main-content-sidebar'>
            <Desk/>
            <Editorial/>
        </aside>
    )
}

export default MainContentSidebar