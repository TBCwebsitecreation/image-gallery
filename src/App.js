import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

function App() {
	return (
		<div className='App'>
			<Header />
      <SearchForm />
      <SearchResult />
		</div>
	);
}

export default App;
