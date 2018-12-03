import React from 'react'
import EditorialPage from './EditorialPage/EditorialPage'
import editorial_list from './editorial_list';

const EditorialPages = () => {
    return (
        <div className='editorial-pages'>
        {
            editorial_list.map(({
                editorial_title,
                editorial_id
            }) => (
                <div className='editorial-page-wrapper' key={editorial_id}>
                    <EditorialPage
                        editorial_title={editorial_title}
                    />
                </div>
            ))
        }
        </div>
    )
}

export default EditorialPages