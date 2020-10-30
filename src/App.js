import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

const images = [
	{
		id: 5675684,
		pageURL: 'https://pixabay.com/photos/cow-calf-cattle-brown-cow-5675684/',
		type: 'photo',
		tags: 'cow, calf, cattle',
		previewURL:
			'https://cdn.pixabay.com/photo/2020/10/22/10/28/cow-5675684_150.jpg',
		previewWidth: 150,
		previewHeight: 100,
		webformatURL:
			'https://pixabay.com/get/53e6d2464c5aa814f1dc846096293f761037dbe3544c704f752c72dd934dc359_640.jpg',
		webformatWidth: 640,
		webformatHeight: 427,
		largeImageURL:
			'https://pixabay.com/get/53e6d2464c5aa814f6da8c7dda7936761d3ad6e055566c48732f78dd9e49c55eb9_1280.jpg',
		imageWidth: 6240,
		imageHeight: 4160,
		imageSize: 6408684,
		views: 15895,
		downloads: 15198,
		favorites: 15,
		likes: 71,
		comments: 72,
		user_id: 10327513,
		user: 'NickyPe',
		userImageURL:
			'https://cdn.pixabay.com/user/2020/10/28/08-56-43-566_250x250.jpg',
	},
];

function App() {
	return (
		<div className='App'>
			<Header />
      <SearchForm />
      <SearchResult images={images} />
		</div>
	);
}

export default App;
