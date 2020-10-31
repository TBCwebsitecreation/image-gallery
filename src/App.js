import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';


function App() {
	// const searchOptions = {
  //   key: process.env.REACT_APP_PIXABAY_KEY,

  //   api: "https://pixabay.com/api/?key=18858567-62cc11f470ba97fc1eea03ba0&q=yellow+flowers&image_type=photo",
    
  //   // api: `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}=yellow+flowers&image_type=photo`,
	// };
	const [images, setImages] = useState("");

	useEffect(() => {
		getImages();
	}, []);

	function getImages() {
		const searchString = 'flowers';
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}=${searchString}&image_type=photo`;
    console.log(url);

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
        console.log(res.hits);
				setImages(res.hits);
			}) }
      
      // useEffect(() => {
      //   getImages()
      // }[]
      // )
  

	return (
		<div className='App'>
			<Header />
			<SearchForm />
			<SearchResult images={images} />
		</div>
	);
}

export default App;
