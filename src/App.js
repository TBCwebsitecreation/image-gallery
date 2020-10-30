import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';




function App() {
  
  const searchOptions = {
		key: process.env.REACT_APP_PIXABAY_KEY,
		safesearch: true,
		api: 'https://pixabay.com/api/',
		endpoint: '/search',
  };
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  function getImages() {
    const searchString = "flowers";
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;

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
