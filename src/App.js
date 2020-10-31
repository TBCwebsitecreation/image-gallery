import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import CategoryResult from './components/CategoriesResult';

function App() {
	const [images, setImages] = useState();
	const [searchString, setSearchString] = useState('');
	const [categoryString, setCategoryString] = useState('');

	useEffect(() => {
		getImages();
		getCategories();
	}, []);

	function getCategories() {
		const categoryUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&category=${categoryString}&image_type=photo`;
		console.log(categoryUrl);

		fetch(categoryUrl)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.hits);
				setImages(res.hits);
			});
	}

	function getImages() {
		const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${searchString}&image_type=photo`;
		console.log(url);

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.hits);
				setImages(res.hits);
			});
	}

	function categoryChange(event) {
		setCategoryString(event.target.value);
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
				categoryChange={categoryChange}
			/>
			<SearchResult images={images} />
			<CategoryResult images={images} />
		</div>
	);
}

export default App;
