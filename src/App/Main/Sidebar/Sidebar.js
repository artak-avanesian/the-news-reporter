import React from 'react'
import Videos from './Videos/Videos'
import PopularNews from './PopularNews/PopularNews'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <Videos/>
            <div className="ad"></div>
            <PopularNews/>
        </aside>
    )
}

export default Sidebar