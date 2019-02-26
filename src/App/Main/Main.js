import React from 'react'
import { Route } from 'react-router-dom'
import NewsMenu from './NewsMenu/NewsMenu'
import MainContent from './MainContent/MainContent'
import Sidebar from './Sidebar/Sidebar'
import './Main.css'
import MainContentArticlePageRoutes from './Routes/MainContentArticlePageRoutes/MainContentArticlePageRoutes'
import NewsMenuRoutes from './Routes/NewsMenuRoutes/NewsMenuRoutes'
import MainMenuRoutes from './Routes/MainMenuRoutes/MainMenuRoutes'
import NewsMenuArticlePageRoutes from './Routes/NewsMenuArticlePageRoutes/NewsMenuArticlePageRoutes'
import MainPageRoutes from './Routes/MainPageRoutes/MainPageRoutes'


const Main = ({
    filteredArticles,
    search
}) => {
    return (
        <main>
            <div className='container'>
                <NewsMenu/>
                <div className="flex-container">
                    <Route path='/' exact component={MainContent}/>
                    <MainPageRoutes
                        filteredArticles={filteredArticles}
                        search={search}
                    />
                    <NewsMenuRoutes/>
                    <MainMenuRoutes/>
                    <MainContentArticlePageRoutes/>
                    <NewsMenuArticlePageRoutes/>
                    <Sidebar/>
                </div>
            </div>
        </main>
    )
}

export default Main