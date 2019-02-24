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
import SearchArticles from './../Header/SearchAndSocials/Search/SearchArticles/SearchArticles'
import RegistrationForm from './../Header/MainMenu/Login/RegistrationForm/RegistrationForm'

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
                    <Route path='/search' render={() => <SearchArticles
                        filteredArticles={filteredArticles}
                        search={search}
                    />}/>
                    <Route path='/registration' component={RegistrationForm}/>
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