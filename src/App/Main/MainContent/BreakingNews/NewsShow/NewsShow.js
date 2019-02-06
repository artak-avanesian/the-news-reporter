import React from 'react'
import { connect } from 'react-redux'
import { keys } from 'lodash'
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
    return {
        newsId: keys(state.currentNews)
    }
}

export default connect(
    mapStateToProps
)(NewsShow)