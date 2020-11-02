import React from 'react';
import './gallery.css';

const Vectors = ({ vectors }) => {
	return (
		<div>
			<h2 className='heading'>Vector Images</h2>
			<div className='gallery'>
				{vectors.map((vector1, index) => (
					<img src={vector1.webformatURL} alt='popular images' />
				))}
			</div>
		</div>
	);
};
export default Vectors;