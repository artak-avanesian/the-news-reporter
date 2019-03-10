import React from 'react'
import editorial_list, { getEditorialNewsMap } from './../EditorialPages/editorial_list'
import './EditorialArticlePage.css'

const EditorialArticlePage = ({
    editorialItem = getEditorialNewsMap(editorial_list),
    match
}) => {
    return (
        <article className='editorial-item'>
            <div className={editorialItem[match.params.editorialArticleId].editorial_img}/>
            <h2>{editorialItem[match.params.editorialArticleId].editorial_title}</h2>
            {
                editorialItem[match.params.editorialArticleId].editorial_article.map((paragraph, i) => (<p key={i}>{paragraph}</p>))
            }
        </article>
    )
}

//some properties locate in WorldNewsPage.css

export default EditorialArticlePage