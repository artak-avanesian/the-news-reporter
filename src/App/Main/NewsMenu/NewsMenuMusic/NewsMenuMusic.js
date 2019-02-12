import React from 'react'
import newsMenuMusicList from './newsMenuMusicList'
import NewsMenuMusicArticle from './NewsMenuMusicArticle/NewsMenuMusicArticle'

const NewsMenuMusic = () => {
    return (
        <div className='news-menu-music-articles'>
            {
                newsMenuMusicList.map(({
                    newsMenuMusicTitle,
                    newsMenuMusicId,
                    newsMenuMusicImg
                }) => (
                    <React.Fragment key={newsMenuMusicId}>
                        <NewsMenuMusicArticle
                            newsMenuMusicTitle={newsMenuMusicTitle}
                            newsMenuMusicImg={newsMenuMusicImg}
                            newsMenuMusicId={newsMenuMusicId}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default NewsMenuMusic