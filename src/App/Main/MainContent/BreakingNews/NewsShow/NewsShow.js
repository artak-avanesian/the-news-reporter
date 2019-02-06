import React from 'react'
import { connect } from 'react-redux'
import { keys } from 'lodash'
import news, { getNewsMap } from './../news'
import './NewsShow.css'

const NewsShow = ({
    newsShowTitle,
    newsId
}) => {
    return (
        <div className={newsId}>
            <div className='news-show-description'>
                <p>{newsShowTitle}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    let currentId = keys(state.currentNews);
    let newsMap = getNewsMap(news);
    return {
        newsId: currentId,
        newsShowTitle: newsMap[currentId].breaking_news_title
    }
}

export default connect(
    mapStateToProps
)(NewsShow)