import React from 'react'
import {Route} from 'react-router-dom'
import NewsMenu from './NewsMenu/NewsMenu'
import MainContent from './MainContent/MainContent'
import Article_1 from './MainContent/MainNewsContent/WorldNews/Articles/Article_1/Article_1'
import Article_2 from './MainContent/MainNewsContent/WorldNews/Articles/Article_2/Article_2'
import Article_3 from './MainContent/MainNewsContent/WorldNews/Articles/Article_3/Article_3'
import Sidebar from './Sidebar/Sidebar'
import './Main.css'

const Main = () => {
    return (
        <main>
            <div className='container'>
                <NewsMenu/>
                <div className="flex-container">
                    <Route path='/' exact component={MainContent}/>
                    <Route path='/world_news_article_1' component={Article_1}/>
                    <Route path='/world_news_article_2' component={Article_2}/>
                    <Route path='/world_news_article_3' component={Article_3}/>
                    <Sidebar/>
                </div>
            </div>
        </main>
    )
}

export default Main