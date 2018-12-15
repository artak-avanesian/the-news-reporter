import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer'
import '../common/style/base.css'

class App extends Component {
	// state = {
    //     isLiked: {
			
	// 	}
    // }
    
    // likeOn = (likeId) => {
    //     this.setState((prevState) => ({
    //         isLiked: {
	// 			...prevState.isLiked,
	// 			[likeId]: true,
	// 		}
    //     }))
    // }
    // likeOff = (likeId) => {
    //     this.setState((prevState) => ({
    //         isLiked: {
	// 			...prevState.isLiked,
	// 			[likeId]: false,
	// 		}
    //     }))
	// }
	
	render() {
		return (
			<div className='lines'>
				<div className='black-main-bg'>
					<div className='white-bg'>
						<div className='App'>
							<Header/>
							<Main
								// isLiked={this.state.isLiked}
								// likeOn={this.likeOn}
								// likeOff={this.likeOff}
							/>
							<Footer/>
						</div>
					</div>
				</div>
			</div>
		)
	}
    
}

export default App;
