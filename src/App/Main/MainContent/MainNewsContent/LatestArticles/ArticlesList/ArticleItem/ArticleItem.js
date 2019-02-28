import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ArticleItem extends Component {
    
    static defaultProps = {
        isLiked: false
    }

    onLikeClick = () => {
        if (this.props.isLiked) this.props.dispatchDisLike(this.props.art_list_id)
        else this.props.dispatchLike(this.props.art_list_id)
    }

    render() {
        const {
            art_list_title,
            art_list_description,
            art_list_id,
            isLiked
        } = this.props
        return (
            <div className='article'>
                <div className="image"></div>
                <div className="description">
                    <h5>{art_list_title}</h5>
                    <p>{art_list_description}</p>
                    <Link to={`/latest-articles/${art_list_id}`} className="read-more">Read more</Link>
                    <span className='like' onClick={() => this.onLikeClick()}>{isLiked ? <span className='glyph2 gold-fill'>E</span> : <span className='glyph2'>D</span>}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        isLiked: state.likedProducts[props.art_list_id]
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatchLike: (id) => dispatch({
        type: "LIKE",
        id: id
    }),
    dispatchDisLike: (id) => dispatch({
        type: "DISLIKE",
        id: id
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleItem)