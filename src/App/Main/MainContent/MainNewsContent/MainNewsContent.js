import React from 'react'
import WorldNews from './WorldNews/WorldNews'
import LatestArticles from './LatestArticles/LatestArticles'
import Gallery from './Gallery/Gallery'
import TechNews from './TechNews/TechNews'
import './MainNewsContent.css'

const MainNewsContent = () => {
    return (
        <div className="main-news-content">
            <div className="all-news">
                <WorldNews
                    // isLiked={isLiked}
                    // likeOn={likeOn}
                    // likeOff={likeOff}
                />
                <LatestArticles/>
                <Gallery/>
                <TechNews/>
            </div>
        </div>
    )
}

export default MainNewsContent