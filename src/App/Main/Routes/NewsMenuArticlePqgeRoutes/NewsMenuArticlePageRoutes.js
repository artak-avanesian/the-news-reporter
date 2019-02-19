import React from 'react'
import { Route } from 'react-router-dom'
import NewsMenuWorldNewsArticlePage from './../../NewsMenu/NewsMenuWorldNews/NewsMenuWorldNewsArticlePage/NewsMenuWorldNewsArticlePage'
import NewsMenuSportsArticlePage from './../../NewsMenu/NewsMenuSports/NewsMenuSportsArticlePage/NewsMenuSportsArticlePage'
import NewsMenuTechArticlePage from './../../NewsMenu/NewsMenuTech/NewsMenuTechArticlePage/NewsMenuTechArticlePage'
import NewsMenuBusinessArticlePage from './../../NewsMenu/NewsMenuBusiness/NewsMenuBusinessArticlePage/NewsMenuBusinessArticlePage'
import NewsMenuMoviesArticlePage from './../../NewsMenu/NewsMenuMovies/NewsMenuMoviesArticlePage/NewsMenuMoviesArticlePage'
import NewsMenuEntertainmentArticlePage from './../../NewsMenu/NewsMenuEntertainment/NewsMenuEntertainmentArticlePage/NewsMenuEntertainmentArticlePage'
import NewsMenuCultureArticlePage from './../../NewsMenu/NewsMenuCulture/NewsMenuCultureArticlePage/NewsMenuCultureArticlePage'
import NewsMenuBooksArticlePage from './../../NewsMenu/NewsMenuBooks/NewsMenuBooksArticlePage/NewsMenuBooksArticlePage'
import NewsMenuScienceArticlePage from './../../NewsMenu/NewsMenuScience/NewsMenuScienceArticlePage/NewsMenuScienceArticlePage'
import NewsMenuMusicArticlePage from './../../NewsMenu/NewsMenuMusic/NewsMenuMusicArticlePage/NewsMenuMusicArticlePage'

export default () => (
    <div>
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
    </div>
)