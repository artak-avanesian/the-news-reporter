import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BreakingNewsImage.css'

class BreakingNewsImage extends Component {

    static defaultProps = {
        isCurrent: false
    }

    currentNewsClick = () => {
        if (!this.props.isCurrent) this.props.dispatchCurrent(this.props.breaking_news_id)
    }
    render() {
        const {
            isCurrent
        } = this.props
        return (
            <div onClick={() => this.currentNewsClick()}>{isCurrent ? <div className='breaking-news-image red-border'></div> : <div className='breaking-news-image'></div>}</div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        isCurrent: state.currentNews[props.breaking_news_id]
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatchCurrent: (id) => dispatch({
        type: 'CURRENT',
        id: id
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BreakingNewsImage)