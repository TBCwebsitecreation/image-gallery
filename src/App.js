import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import NavBar from './components/NavItems/NavigationBar';
import About from './components/NavItems/About';
import Photos from './components/NavItems/Photos';
import { Route, Redirect } from 'react-router-dom';

function App() {
	const [images, setImages] = useState();
	const [searchString, setSearchString] = useState('');
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getImages();
		popularImages();
	}, []);

	

	function getImages() {
		const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${searchString}&image_type=photo&per_page=100`;
		console.log(url);

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.hits);
				setImages(res.hits);
			});
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		getImages();
	}

	function popularImages() {
		const url1 = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&order=popular&image_type=photo&per_page=100`;
		console.log(url1);

		fetch(url1)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.hits);
				setPopular(res.hits);
			});
	}

	return (
		<div className='App'>
			<Header />
			<NavBar />
			<main>
				<Route path='/' render={() => <Redirect />} />
				<Route path='/about' component={About} />
				<Route path='/photos' render={() => <Photos popular={popular} />} />
			</main>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<SearchResult images={images} />
		</div>
	);
}

export default App;
