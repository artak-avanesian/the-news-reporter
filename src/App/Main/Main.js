import React from 'react'
import {Route} from 'react-router-dom'
import NewsMenu from './NewsMenu/NewsMenu'
import MainContent from './MainContent/MainContent'
import NewsMenuWorldNews from './NewsMenu/NewsMenuWorldNews/NewsMenuWorldNews'
import Sidebar from './Sidebar/Sidebar'
import WorldNewsPage from './MainContent/MainNewsContent/WorldNews/WorldNewsPage/WorldNewsPage'
import './Main.css'
import Favourites from '../../common/features/Favourites/Favourites'

const Main = () => {
    return (
        <main>
            <div className='container'>
                <NewsMenu/>
                <div className="flex-container">
                    <Route path='/' exact render={() => {
                        return (
                            <MainContent/>
                        )
                    }}/>
                    <Route path='/world-news-articles/:worldNewsArticleId' component={WorldNewsPage}/>
                    <Route path='/world-news' component={NewsMenuWorldNews}/>
                    <Route path='/favourites' render={() => {
                        return (
                            <Favourites
                                
                            />
                        )
                    }}/>
                    <Sidebar/>
                </div>
            </div>
        </main>
    )
}

export default Main