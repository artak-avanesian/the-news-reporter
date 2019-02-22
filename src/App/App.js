import React, { Component } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import '../common/style/base.css'
import allArticles from './Header/SearchAndSocials/Search/allArticles'

class App extends Component {

	state = {
		search: '',
		value: ''
	}

	valueChangeHandler = event => {
		this.setState({
			value: event.target.value
		})
	}

	onSearch = search => {
        this.setState({search})
    }

	getFilteredArticles() {

        const search = this.state.search;

        if(!search) return [];

        return allArticles.filter(item => {
			return item['title'].toLowerCase().includes(search.toLowerCase()) || 
            item['article'].toLowerCase().includes(search.toLowerCase()) ||
            item['description'].toLowerCase().includes(search.toLowerCase())
		})
    }

	render() {

		const filteredArticles = this.getFilteredArticles()

		return (
			<div className='lines'>
				<div className='black-main-bg'>
					<div className='white-bg'>
						<div className='App'>
							<Header
								onSearch={this.onSearch}
								value={this.state.value}
								valueChangeHandler={this.valueChangeHandler}
								search={this.state.search}
							/>
							<Main
								filteredArticles={filteredArticles}
								search={this.state.search}
							/>
							<Footer/>
						</div>
					</div>
				</div>
			</div>
		)
	}   
}

export default App
