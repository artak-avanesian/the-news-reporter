import React from 'react'
import popular_list from'./../popular_list'
import AllPopularNewsArticles from './AllPopularNewsArticles/AllPopularNewsArticles'
import './AllPopular.css'

export default () => (
    <div className='all-popular'>
        {
            popular_list.map(({
                popular_title,
                popular_id,
                popular_link
            }) => (
                <React.Fragment key={popular_id}>
                    <AllPopularNewsArticles
                        popular_title={popular_title}
                        popular_link={popular_link}
                    />
                </React.Fragment>
            ))
        }
    </div>
)