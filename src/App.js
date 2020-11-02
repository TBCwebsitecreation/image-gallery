import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import NavBar from './components/NavItems/NavigationBar';
import About from './components/NavItems/About';
import Photos from './components/NavItems/Photos';
import Vectors from './components/NavItems/Vectors';
import Illustrations from './components/NavItems/Illustrations';
import Editors from './components/NavItems/Editors';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
	const [images, setImages] = useState();
	const [searchString, setSearchString] = useState('');
	const [popular, setPopular] = useState([]);
	const [vectors, setVectors] = useState([]);
	const [illustration, setIllustration] = useState([]);
	const [editors, setEditors] = useState([]);


	useEffect(() => {
		getImages();
		popularImages();
		vectorImages();
		illustrationImages();
		editorsImages();

	}, []);

	function getImages() {
		const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${searchString}&image_type=photo&per_page=100`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
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

		fetch(url1)
			.then((res) => res.json())
			.then((res) => {
				setPopular(res.hits);
			});
	}

	function vectorImages() {
		const url2 = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&image_type=vector&per_page=100`;

		fetch(url2)
			.then((res) => res.json())
			.then((res) => {
				setVectors(res.hits);
			});
	}

	function illustrationImages() {
		const url3 = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&image_type=illustration&per_page=100`;

		fetch(url3)
			.then((res) => res.json())
			.then((res) => {
				setIllustration(res.hits);
			});
	}

	function editorsImages() {
		const url4 = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&editors_choice=true&image_type=photo&per_page=100`;

		fetch(url4)
			.then((res) => res.json())
			.then((res) => {
				setEditors(res.hits);
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
				<Route path='/vectors' render={() => <Vectors vectors={vectors} />} />
				<Route
					path='/illustrations'
					render={() => <Illustrations illustration={illustration} />}
				/>
				<Route path='/editors' render={() => <Editors editors={editors} />} />

				
			</main>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
				e
			/>
			<SearchResult images={images} />
		</div>
	);
}

export default App;
