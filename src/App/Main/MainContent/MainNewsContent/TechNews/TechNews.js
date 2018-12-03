import React from 'react'
import TechNewsTitle from './TechNewsTitle/TechNewsTitle'
import TechNewsArticles from './TechNewsArticles/TechNewsArticles'

const TechNews = () => {
    return (
        <div className='tech-news'>
        <TechNewsTitle/>
        <TechNewsArticles/>
        </div>
    )
}

export default TechNews