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
	{
		id: 5675705,
		pageURL: 'https://pixabay.com/photos/hemp-plant-cannabis-nature-5675705/',
		type: 'photo',
		tags: 'hemp, plant, cannabis',
		previewURL:
			'https://cdn.pixabay.com/photo/2020/10/22/10/42/hemp-5675705_150.jpg',
		previewWidth: 150,
		previewHeight: 100,
		webformatURL:
			'https://pixabay.com/get/53e6d2464d52a914f1dc846096293f761037dbe3544c704f752c72dd934dc359_640.jpg',
		webformatWidth: 640,
		webformatHeight: 427,
		largeImageURL:
			'https://pixabay.com/get/53e6d2464d52a914f6da8c7dda7936761d3ad6e055566c48732f78dd9e49c55eb9_1280.jpg',
		imageWidth: 6240,
		imageHeight: 4160,
		imageSize: 5590336,
		views: 14602,
		downloads: 14101,
		favorites: 15,
		likes: 63,
		comments: 70,
		user_id: 10327513,
		user: 'NickyPe',
		userImageURL:
			'https://cdn.pixabay.com/user/2020/10/28/08-56-43-566_250x250.jpg',
	},
	{
		id: 5678735,
		pageURL:
			'https://pixabay.com/photos/sunrise-field-silhouette-trees-5678735/',
		type: 'photo',
		tags: 'sunrise, field, silhouette',
		previewURL:
			'https://cdn.pixabay.com/photo/2020/10/23/13/12/sunrise-5678735_150.jpg',
		previewWidth: 150,
		previewHeight: 100,
		webformatURL:
			'https://pixabay.com/get/53e6d24b4d51a914f1dc846096293f761037dbe3544c704f752c72dd934dc359_640.jpg',
		webformatWidth: 640,
		webformatHeight: 427,
		largeImageURL:
			'https://pixabay.com/get/53e6d24b4d51a914f6da8c7dda7936761d3ad6e055566c48732f78dd9e49c55eb9_1280.jpg',
		imageWidth: 6016,
		imageHeight: 4016,
		imageSize: 2809307,
		views: 13668,
		downloads: 13265,
		favorites: 25,
		likes: 72,
		comments: 52,
		user_id: 1130890,
		user: 'Peggychoucair',
		userImageURL:
			'https://cdn.pixabay.com/user/2018/12/28/22-17-08-435_250x250.jpg',
	},
	{
		id: 5687793,
		pageURL:
			'https://pixabay.com/illustrations/halloween-moon-haunted-house-5687793/',
		type: 'illustration',
		tags: 'halloween, moon, haunted house',
		previewURL:
			'https://cdn.pixabay.com/photo/2020/10/26/16/23/halloween-5687793_150.jpg',
		previewWidth: 150,
		previewHeight: 100,
		webformatURL:
			'https://pixabay.com/get/53e6dd444d5baf14f1dc846096293f761037dbe3544c704f752c72dd934dc359_640.jpg',
		webformatWidth: 640,
		webformatHeight: 427,
		largeImageURL:
			'https://pixabay.com/get/53e6dd444d5baf14f6da8c7dda7936761d3ad6e055566c48732f78dd9e49c55eb9_1280.jpg',
		imageWidth: 4217,
		imageHeight: 2811,
		imageSize: 1274820,
		views: 638,
		downloads: 416,
		favorites: 18,
		likes: 33,
		comments: 29,
		user_id: 13452116,
		user: 'Syaibatulhamdi',
		userImageURL:
			'https://cdn.pixabay.com/user/2020/08/19/09-44-13-930_250x250.png',
	},
	{
		id: 5679415,
		pageURL:
			'https://pixabay.com/photos/lake-forest-boat-sailing-water-5679415/',
		type: 'photo',
		tags: 'lake, forest, boat',
		previewURL:
			'https://cdn.pixabay.com/photo/2020/10/23/17/47/lake-5679415_150.jpg',
		previewWidth: 150,
		previewHeight: 100,
		webformatURL:
			'https://pixabay.com/get/53e6d24a4e53a914f1dc846096293f761037dbe3544c704f752c72dd934dc359_640.jpg',
		webformatWidth: 640,
		webformatHeight: 426,
		largeImageURL:
			'https://pixabay.com/get/53e6d24a4e53a914f6da8c7dda7936761d3ad6e055566c48732f78dd9e49c55eb9_1280.jpg',
		imageWidth: 4933,
		imageHeight: 3282,
		imageSize: 6033808,
		views: 14971,
		downloads: 14530,
		favorites: 22,
		likes: 65,
		comments: 47,
		user_id: 1032521,
		user: 'Tama66',
		userImageURL:
			'https://cdn.pixabay.com/user/2020/09/19/17-00-44-173_250x250.jpeg',
	},
	{
		id: 5683637,
		pageURL:
			'https://pixabay.com/photos/seagull-gull-bird-animal-seabird-5683637/',
		type: 'photo',
		tags: 'seagull, gull, bird',
		previewURL:
			'https://cdn.pixabay.com/photo/2020/10/25/09/23/seagull-5683637_150.jpg',
		previewWidth: 150,
		previewHeight: 100,
		webformatURL:
			'https://pixabay.com/get/53e6dd404c51ab14f1dc846096293f761037dbe3544c704f752c72dd934dc359_640.jpg',
		webformatWidth: 640,
		webformatHeight: 427,
		largeImageURL:
			'https://pixabay.com/get/53e6dd404c51ab14f6da8c7dda7936761d3ad6e055566c48732f78dd9e49c55eb9_1280.jpg',
		imageWidth: 6000,
		imageHeight: 4000,
		imageSize: 3126393,
		views: 2786,
		downloads: 2668,
		favorites: 8,
		likes: 45,
		comments: 47,
		user_id: 12696704,
		user: 'papazachariasa',
		userImageURL:
			'https://cdn.pixabay.com/user/2019/06/06/14-40-36-354_250x250.jpg',
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
