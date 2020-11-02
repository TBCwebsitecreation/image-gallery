import React from 'react';
import './gallery.css';

const Photos = ({ editors }) => {
	return (
		<div>
			<h2 className='heading'>Editor's Choice</h2>
			<div className='gallery'>
				{editors.map((editorsChoice, index) => (
					<img src={editorsChoice.webformatURL} alt='popular images' />
				))}
			</div>
		</div>
	);
};

export default Photos;
