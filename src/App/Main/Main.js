import React from 'react'
import {Route} from 'react-router-dom'
import NewsMenu from './NewsMenu/NewsMenu'
import MainContent from './MainContent/MainContent'
import NewsMenuWorldNews from './NewsMenu/NewsMenuWorldNews/NewsMenuWorldNews'
import Sidebar from './Sidebar/Sidebar'
import WorldNewsPage from './MainContent/MainNewsContent/WorldNews/WorldNewsPage/WorldNewsPage'
import './Main.css'
import Favourites from '../../common/features/Favourites/Favourites'
import AboutUs from './../Header/MainMenu/AboutUs/AboutUs'
import ContactUs from './../Header/MainMenu/ContactUs/ContactUs'
import Subscribe from './../Header/MainMenu/Subscribe/Subscribe'
import NewsMenuTech from './NewsMenu/NewsMenuTech/NewsMenuTech'
import NewsMenuSports from './NewsMenu/NewsMenuSports/NewsMenuSports'
import NewsMenuBusiness from './NewsMenu/NewsMenuBusiness/NewsMenuBusiness'
import NewsMenuCulture from './NewsMenu/NewsMenuCulture/NewsMenuCulture'
import NewsMenuBlogs from './NewsMenu/NewsMenuBlogs/NewsMenuBlogs'
import NewsMenuEntertainment from './NewsMenu/NewsMenuEntertainment/NewsMenuEntertainment'
import NewsMenuMovies from './NewsMenu/NewsMenuMovies/NewsMenuMovies'
import NewsMenuBooks from './NewsMenu/NewsMenuBooks/NewsMenuBooks'
import NewsMenuClassfieds from './NewsMenu/NewsMenuClassfieds/NewsMenuClassfieds'
import LatestArticlePage from './MainContent/MainNewsContent/LatestArticles/LatestArticlePage/LatestArticlePage'

const Main = () => {
    return (
        <main>
            <div className='container'>
                <NewsMenu/>
                <div className="flex-container">
                    <Route path='/' exact component={MainContent}/>
                    <Route path='/world-news-articles/:worldNewsArticleId' component={WorldNewsPage}/>
                    <Route path='/world-news' component={NewsMenuWorldNews}/>
                    <Route path='/favourites' component={Favourites}/>
                    <Route path='/about-us' component={AboutUs}/>
                    <Route path='/contact-us' component={ContactUs}/>
                    <Route path='/subscribe' component={Subscribe}/>
                    <Route path='/tech' component={NewsMenuTech}/>
                    <Route path='/sports' component={NewsMenuSports}/>
                    <Route path='/business' component={NewsMenuBusiness}/>
                    <Route path='/blogs' component={NewsMenuBlogs}/>
                    <Route path='/entertainment' component={NewsMenuEntertainment}/>
                    <Route path='/movies' component={NewsMenuMovies}/>
                    <Route path='/books' component={NewsMenuBooks}/>
                    <Route path='/classfieds' component={NewsMenuClassfieds}/>
                    <Route path='/culture' component={NewsMenuCulture}/>
                    <Route path='/latest-articles/:latestArticleId' component={LatestArticlePage}/>
                    <Sidebar/>
                </div>
            </div>
        </main>
    )
}

export default Main