import React from 'react';
import { Router } from '@reach/router';

import Header from './components/Header';
import Words from './pages/Words';

import './App.css';

function App() {
	const WordsPage = () => <Words />;

	return (
		<div className="App">
			<Header />
			<main className="app-main">
				<Router>
					<WordsPage path="/words" />
				</Router>
			</main>
		</div>
	);
}

export default App;
