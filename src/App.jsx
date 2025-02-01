// Libruary
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

// Components
import Header from './blocks/Header';
import Footer from './blocks/Footer';

// Pages
import Home from './pages/Home'
import About from './pages/About';

// Assets
import './scss/base/fonts.scss'
import './scss/base/general.scss'

function App() {

	return (
		<>
			<Header></Header>
			<main className='main'>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</BrowserRouter>
			</main>
			<Footer></Footer>
		</>
	)
}

export default App