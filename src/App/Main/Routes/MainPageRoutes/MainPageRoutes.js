import React from 'react'
import { Route } from 'react-router-dom'
import SearchArticles from './../../../Header/SearchAndSocials/Search/SearchArticles/SearchArticles'
import RegistrationForm from './../../../Header/MainMenu/Login/RegistrationForm/RegistrationForm'
import VideoArticlePage from './../../Sidebar/Videos/VideoArticlePage/VideoArticlePage'
import GalleryPictures from './../../MainContent/MainNewsContent/Gallery/GalleryPictures/GalleryPictures'
import LatestNews from './../../MainContent/MainNewsContent/LatestArticles/LatestNews/LatestNews'
import AllPopular from './../../Sidebar/PopularNews/AllPopular/AllPopular'

export default ({
    search,
    filteredArticles
}) => (
    <React.Fragment>
        <Route path='/search' render={() => <SearchArticles
            filteredArticles={filteredArticles}
            search={search}
        />}/>
        <Route path='/registration' component={RegistrationForm}/>
        <Route path='/videos/:video_id' component={VideoArticlePage}/>
        <Route path='/gallery' component={GalleryPictures}/>
        <Route path='/latest-news' component={LatestNews}/>
        <Route exact path='/popular-news' component={AllPopular}/>
    </React.Fragment>
)