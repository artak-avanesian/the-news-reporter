import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer'
import '../common/style/base.css'

const App = () => {
    return (
		<div className='lines'>
			<div className='black-main-bg'>
				<div className='white-bg'>
					<div className='App'>
						<Header/>
						<Main/>
						<Footer/>
					</div>
				</div>
			</div>
		</div>
    )
}

export default App;
