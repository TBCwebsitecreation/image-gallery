import React from 'react';

const SearchResult = ({ images }) => {
	// return early if there are no images
	if (!images) {
		return <h2>No Images Found!</h2>;
	}

	return (
		<div className='gallery'>
			{images.map((image) => (
				<div key={image.id} className='pics'>
					<img src={image.webformatURL} alt='images from pixabay' />
				</div>
			))}
		</div>
	);
};

export default SearchResult;