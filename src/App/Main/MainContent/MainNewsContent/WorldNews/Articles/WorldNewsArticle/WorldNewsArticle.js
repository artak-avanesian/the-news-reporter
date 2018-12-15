import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './WorldNewsArticle.css'

class Article extends Component {

    static defaultProps = {
        isLiked: false,
    }

    onLikeClick = () => {
        if (this.props.isLiked) this.props.dispatchDisLike(this.props.id)
        else this.props.dispatchLike(this.props.id)
    }
    
    render() {
        const {
            title,
            description,
            id,
            isLiked
        } = this.props
        return (
            <div className='article'>
                <div className="image"></div>
                <div className="description">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <Link to={`world-news-articles/${id}`} className="read-more">Read more</Link>
                    <span className='like' onClick={() => this.onLikeClick()}>{isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        isLiked: state[props.id]
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatchLike: (id) => dispatch({
        type: "LIKE",
        id: id,
    }),
    dispatchDisLike: (id) => dispatch({
        type: "DISLIKE",
        id: id
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article)
