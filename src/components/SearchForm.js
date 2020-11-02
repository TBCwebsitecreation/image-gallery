import React from 'react';
import './SearchForm.css';


const SearchForm = (props) => {
	const {
		handleSubmit,handleChange,searchString} = props;
	return (
		<form onSubmit={handleSubmit} className='form-horizontal' inline>
			
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
				
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default SearchForm;
