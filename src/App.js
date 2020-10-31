import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

function App() {
	const [images, setImages] = useState();
	const [searchString, setSearchString] = useState('flowers');

	useEffect(() => {
		getImages();
	}, []);

	function getImages() {
		// const searchString = 'flowers';
		const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${searchString}&image_type=photo`;
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

	return (
		<div className='App'>
			<Header />
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
