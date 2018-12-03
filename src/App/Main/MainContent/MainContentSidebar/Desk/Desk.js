import React from 'react'
import DeskTitle from './DeskTitle/DeskTitle'
import DeskArticles from './DeskArticles/DeskArticles'

const Desk = () => {
    return (
        <div className='desk'>
            <DeskTitle/>
            <DeskArticles/>
        </div>
    )
}

export default Desk