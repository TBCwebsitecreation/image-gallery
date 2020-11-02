import React from 'react';
import './gallery.css';

const Illustrations = ({ illustration }) => {
	return (
		<div>
			<h2 className='heading'>Illustrations</h2>
			<div className='gallery'>
				{illustration.map((illustration1, index) => (
					<img src={illustration1.webformatURL} alt='popular images' />
				))}
			</div>
		</div>
	);
};
export default Illustrations;
