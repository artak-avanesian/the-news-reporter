import React, { Component } from 'react'
import './Search.css'
import allArticles from './allArticles'

class Search extends Component {

    state = {
        value: '',
        search: ''
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
            <div className='search'>
                <input 
                    type='text' 
                    name='search' 
                    value={this.state.value}
                    onChange={this.valueChangeHandler}
                />
                <button className='search-icon' onClick={() => this.onSearch(this.state.value)}/>
            </div>    
        )
    }
}


export default Search