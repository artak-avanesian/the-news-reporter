import React from 'react'
import { Route } from 'react-router-dom'
import NewsMenu from './NewsMenu/NewsMenu'
import MainContent from './MainContent/MainContent'
import Sidebar from './Sidebar/Sidebar'
import WorldNewsPage from './MainContent/MainNewsContent/WorldNews/WorldNewsPage/WorldNewsPage'
import './Main.css'
import Favourites from './../Header/MainMenu/Favourites/Favourites'
import AboutUs from './../Header/MainMenu/AboutUs/AboutUs'
import ContactUs from './../Header/MainMenu/ContactUs/ContactUs'
import Subscribe from './../Header/MainMenu/Subscribe/Subscribe'
import NewsMenuWorldNews from './NewsMenu/NewsMenuWorldNews/NewsMenuWorldNews'
import NewsMenuTech from './NewsMenu/NewsMenuTech/NewsMenuTech'
import NewsMenuSports from './NewsMenu/NewsMenuSports/NewsMenuSports'
import NewsMenuBusiness from './NewsMenu/NewsMenuBusiness/NewsMenuBusiness'
import NewsMenuCulture from './NewsMenu/NewsMenuCulture/NewsMenuCulture'
import NewsMenuMusic from './NewsMenu/NewsMenuMusic/NewsMenuMusic'
import NewsMenuEntertainment from './NewsMenu/NewsMenuEntertainment/NewsMenuEntertainment'
import NewsMenuMovies from './NewsMenu/NewsMenuMovies/NewsMenuMovies'
import NewsMenuBooks from './NewsMenu/NewsMenuBooks/NewsMenuBooks'
import NewsMenuScience from './NewsMenu/NewsMenuScience/NewsMenuScience'
import LatestArticlePage from './MainContent/MainNewsContent/LatestArticles/LatestArticlePage/LatestArticlePage'
import TechNewsArticlePage from './MainContent/MainNewsContent/TechNews/TechNewsArticlePage/TechNewsArticlePage'
import PopularNewsArticlePage from './Sidebar/PopularNews/PopularNewsArticlePage/PopularNewsArticlePage'
import DeskArticlePage from './MainContent/MainContentSidebar/Desk/DeskArticlePage/DeskArticlePage'
import EditorialArticlePage from './MainContent/MainContentSidebar/Editorial/EditorialArticlePage/EditorialAriclePage'
import NewsMenuWorldNewsArticlePage from './NewsMenu/NewsMenuWorldNews/NewsMenuWorldNewsArticlePage/NewsMenuWorldNewsArticlePage'
import NewsMenuSportsArticlePage from './NewsMenu/NewsMenuSports/NewsMenuSportsArticlePage/NewsMenuSportsArticlePage'
import NewsMenuTechArticlePage from './NewsMenu/NewsMenuTech/NewsMenuTechArticlePage/NewsMenuTechArticlePage'
import NewsMenuBusinessArticlePage from './NewsMenu/NewsMenuBusiness/NewsMenuBusinessArticlePage/NewsMenuBusinessArticlePage'
import NewsMenuMoviesArticlePage from './NewsMenu/NewsMenuMovies/NewsMenuMoviesArticlePage/NewsMenuMoviesArticlePage'
import NewsMenuEntertainmentArticlePage from './NewsMenu/NewsMenuEntertainment/NewsMenuEntertainmentArticlePage/NewsMenuEntertainmentArticlePage'
import NewsMenuCultureArticlePage from './NewsMenu/NewsMenuCulture/NewsMenuCultureArticlePage/NewsMenuCultureArticlePage'
import NewsMenuBooksArticlePage from './NewsMenu/NewsMenuBooks/NewsMenuBooksArticlePage/NewsMenuBooksArticlePage'
import NewsMenuScienceArticlePage from './NewsMenu/NewsMenuScience/NewsMenuScienceArticlePage/NewsMenuScienceArticlePage'
import NewsMenuMusicArticlePage from './NewsMenu/NewsMenuMusic/NewsMenuMusicArticlePage/NewsMenuMusicArticlePage'

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
                    <Route path='/music' component={NewsMenuMusic}/>
                    <Route path='/entertainment' component={NewsMenuEntertainment}/>
                    <Route path='/movies' component={NewsMenuMovies}/>
                    <Route path='/books' component={NewsMenuBooks}/>
                    <Route path='/science' component={NewsMenuScience}/>
                    <Route path='/culture' component={NewsMenuCulture}/>
                    <Route path='/latest-articles/:latestArticleId' component={LatestArticlePage}/>
                    <Route path='/tech-news/:techNewsArticleId' component={TechNewsArticlePage}/>
                    <Route path='/popular-news/:popularNewsArticleId' component={PopularNewsArticlePage}/>
                    <Route path='/desk-news/:deskArticleId' component={DeskArticlePage}/>
                    <Route path='/editorial/:editorialArticleId' component={EditorialArticlePage}/>
                    <Route path='/news-menu/world-news/:newsMenuWorldNewsId' component={NewsMenuWorldNewsArticlePage}/>
                    <Route path='/news-menu/sports/:newsMenuSportsId' component={NewsMenuSportsArticlePage}/>
                    <Route path='/news-menu/tech/:newsMenuTechId' component={NewsMenuTechArticlePage}/>
                    <Route path='/news-menu/business/:newsMenuBusinessId' component={NewsMenuBusinessArticlePage}/>
                    <Route path='/news-menu/movies/:newsMenuMoviesId' component={NewsMenuMoviesArticlePage}/>
                    <Route path='/news-menu/entertainment/:newsMenuEntertainmentId' component={NewsMenuEntertainmentArticlePage}/>
                    <Route path='/news-menu/culture/:newsMenuCultureId' component={NewsMenuCultureArticlePage}/>
                    <Route path='/news-menu/books/:newsMenuBooksId' component={NewsMenuBooksArticlePage}/>
                    <Route path='/news-menu/science/:newsMenuScienceId' component={NewsMenuScienceArticlePage}/>
                    <Route path='/news-menu/music/:newsMenuMusicId' component={NewsMenuMusicArticlePage}/>
                    <Sidebar/>
                </div>
            </div>
        </main>
    )
}

export default Main