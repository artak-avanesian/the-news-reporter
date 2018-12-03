import React from 'react'
import NewsMenu from './NewsMenu/NewsMenu'
import MainContent from './MainContent/MainContent'
import Sidebar from './Sidebar/Sidebar'
import './Main.css'

const Main = () => {
    return (
        <main>
            <div className='container'>
                <NewsMenu/>
                <div className="flex-container">
                    <MainContent/>
                    <Sidebar/>
                </div>
            </div>
        </main>
    )
}

export default Main