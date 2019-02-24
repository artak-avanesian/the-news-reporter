import React from 'react'
import { Route } from 'react-router-dom'
import WorldNewsPage from './../../MainContent/MainNewsContent/WorldNews/WorldNewsPage/WorldNewsPage'
import LatestArticlePage from './../../MainContent/MainNewsContent/LatestArticles/LatestArticlePage/LatestArticlePage'
import TechNewsArticlePage from './../../MainContent/MainNewsContent/TechNews/TechNewsArticlePage/TechNewsArticlePage'
import PopularNewsArticlePage from './../../Sidebar/PopularNews/PopularNewsArticlePage/PopularNewsArticlePage'
import DeskArticlePage from './../../MainContent/MainContentSidebar/Desk/DeskArticlePage/DeskArticlePage'
import EditorialArticlePage from './../../MainContent/MainContentSidebar/Editorial/EditorialArticlePage/EditorialAriclePage'

export default () => (
    <React.Fragment>
        <Route path='/world-news-articles/:worldNewsArticleId' component={WorldNewsPage}/>
        <Route path='/latest-articles/:latestArticleId' component={LatestArticlePage}/>
        <Route path='/tech-news/:techNewsArticleId' component={TechNewsArticlePage}/>
        <Route path='/popular-news/:popularNewsArticleId' component={PopularNewsArticlePage}/>
        <Route path='/desk-news/:deskArticleId' component={DeskArticlePage}/>
        <Route path='/editorial/:editorialArticleId' component={EditorialArticlePage}/>
    </React.Fragment>
)