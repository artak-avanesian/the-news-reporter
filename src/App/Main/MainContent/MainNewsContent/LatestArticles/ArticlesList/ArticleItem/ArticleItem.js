import React from 'react'


const ArticleItem = ({
    art_list_title,
    art_list_description,
}) => {
    return (
        <div className='article'>
            <div className="image"></div>
            <div className="description">
                <h5>{art_list_title}</h5>
                <p>{art_list_description}</p>
                <a href="article_1.html" target='_blank' className="read-more">Read more</a>
            </div>
        </div>
    )
}

export default ArticleItem