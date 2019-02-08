import React from 'react'
import editorial_list, { getEditorialNewsMap } from './../EditorialPages/editorial_list'

const EditorialArticlePage = ({
    editorialItem = getEditorialNewsMap(editorial_list),
    match
}) => {
    return (
        <article className='world-news-item'>
            <img src={editorialItem[match.params.editorialArticleId].editorial_img_src} alt=""/>
            <h2>{editorialItem[match.params.editorialArticleId].editorial_title}</h2>
            <p>{editorialItem[match.params.editorialArticleId].editorial_article}</p>
        </article>
    )
}

export default EditorialArticlePage