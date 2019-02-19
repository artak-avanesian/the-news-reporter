import React from 'react'
import { Route } from 'react-router-dom'
import NewsMenuWorldNews from './../../NewsMenu/NewsMenuWorldNews/NewsMenuWorldNews'
import NewsMenuTech from './../../NewsMenu/NewsMenuTech/NewsMenuTech'
import NewsMenuSports from './../../NewsMenu/NewsMenuSports/NewsMenuSports'
import NewsMenuBusiness from './../../NewsMenu/NewsMenuBusiness/NewsMenuBusiness'
import NewsMenuCulture from './../../NewsMenu/NewsMenuCulture/NewsMenuCulture'
import NewsMenuMusic from './../../NewsMenu/NewsMenuMusic/NewsMenuMusic'
import NewsMenuEntertainment from './../../NewsMenu/NewsMenuEntertainment/NewsMenuEntertainment'
import NewsMenuMovies from './../../NewsMenu/NewsMenuMovies/NewsMenuMovies'
import NewsMenuBooks from './../../NewsMenu/NewsMenuBooks/NewsMenuBooks'
import NewsMenuScience from './../../NewsMenu/NewsMenuScience/NewsMenuScience'

export default () => (
    <div>
        <Route path='/world-news' component={NewsMenuWorldNews}/>
        <Route path='/tech' component={NewsMenuTech}/>
        <Route path='/sports' component={NewsMenuSports}/>
        <Route path='/business' component={NewsMenuBusiness}/>
        <Route path='/music' component={NewsMenuMusic}/>
        <Route path='/entertainment' component={NewsMenuEntertainment}/>
        <Route path='/movies' component={NewsMenuMovies}/>
        <Route path='/books' component={NewsMenuBooks}/>
        <Route path='/science' component={NewsMenuScience}/>
        <Route path='/culture' component={NewsMenuCulture}/>
    </div>
)