import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
	return (
		<Navbar bg='warning' variant='light' expand='lg'>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>

			<div className='mr-auto'>
				<Link to='/about'>About</Link>
				<Link to='/photos'>Photos</Link>
				<Link to='/vectors'>Vectors</Link>
				<Link to='/illustrations'>Ilustrations</Link>
				<Link to='/editors'>Editor's Choice</Link>
			</div>
		</Navbar>
	);
};

export default NavigationBar;
