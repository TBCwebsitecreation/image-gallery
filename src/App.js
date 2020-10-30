import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_PIXABAY_KEY,
		// safesearch: true,
		// api: 'https://pixabay.com/api',
		api:
			'https://pixabay.com/api/?key=18858567-62cc11f470ba97fc1eea03ba&q=flowers&color=pink',
		// endpoint: '/flowers',
	};
	const [images, setImages] = useState("");

	useEffect(() => {
		getImages();
	}, []);

	function getImages() {
		const searchString = 'flowers';
    const url = `${searchOptions.api}?api_key=${searchOptions.key}&lang=en`;
    console.log(url);

		fetch(searchOptions.api)
			.then((res) => res.json())
			.then((res) => {
        console.log(res);
				setImages(res.hits);
			})
			.catch(console.error);
	}

	return (
		<div className='App'>
			<Header />
			<SearchForm />
			<SearchResult images={images} />
		</div>
	);
}

export default App;
