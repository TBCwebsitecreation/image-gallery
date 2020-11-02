import React from 'react';
import './gallery.css'

const Photos = ({ popular }) => {
	return (
		<div>
			<h2 className="heading">Popular Pictures</h2>
			<div className='gallery'>
				{popular.map((popularone, index) => (
					<img src={popularone.webformatURL} alt='popular images' />
				))}
			</div>
		</div>
	);
};

export default Photos;