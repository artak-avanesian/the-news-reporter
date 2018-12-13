import React from 'react'
import BreakingNews from './BreakingNews/BreakingNews'
import MainNewsContent from './MainNewsContent/MainNewsContent'
import MainContentSidebar from './MainContentSidebar/MainContentSidebar'
import './MainContent.css'

const MainContent = ({
    isLiked,
    likeOn,
    likeOff
}) => {
    return (
        <div className='main-content'>
            <BreakingNews/>
            <div className="flex-container">
                <MainNewsContent
                    isLiked={isLiked}
                    likeOn={likeOn}
                    likeOff={likeOff}
                />
                <MainContentSidebar/>
            </div>
        </div>
    )
}

export default MainContent