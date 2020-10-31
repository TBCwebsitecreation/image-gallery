import React from 'react';

const SearchForm = (props) => {
	const {
		handleSubmit,handleChange,searchString,categoryChange,categoryString,} = props;
	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
			/>
			<div>
				<input
					classname='categories'
					type='text'
					placeholder='Categories'
					name='categories'
					onChange={categoryChange}
					value={categoryString}
					
					
				/>
				
			</div>

			<button type='submit'>Submit</button>
		</form>
	);
};

export default SearchForm;
