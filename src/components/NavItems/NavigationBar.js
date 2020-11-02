import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
	
	return (
		<div>
			
			<Link to='/about'>About</Link>
			<Link to='/photos'>Photos</Link>
		</div>
	);
};

export default NavigationBar;
