import React from 'react';

const Photos = ({ popular }) => {
	return (
		<div className="gallery">
			<h1>Popular Pictures</h1>
			{popular.map((popularone, index) => (
				<img src = {popularone.webformatURL} alt="popular images" />
			))}
		</div>
	);
};

export default Photos;