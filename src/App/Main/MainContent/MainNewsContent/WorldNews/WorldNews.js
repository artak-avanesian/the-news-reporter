import React from 'react'
import Title from './Title/Title'
import Articles from './Articles/Articles'

const WorldNews = ({
    isLiked,
    likeOn,
    likeOff
}) => {
    return (
        <div className='world-news'>
            <Title/>
            <Articles
                isLiked={isLiked}
                likeOn={likeOn}
                likeOff={likeOff}
            />
        </div>
    )
}

export default WorldNews