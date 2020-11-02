import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
	return (
		<Navbar bg='warning' variant='light' expand='lg'>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>

			<div className='mr-auto'>
				<Link to='/about'>About</Link>
				<Link to='/photos'>Photos</Link>
				<Link to='/vetors'>Vectors</Link>
				<Link to='/illustrations'>Ilustrations</Link>
				<Link to='/videos'>Videos</Link>
				<Link to='/editors'>Editor's Choice</Link>
			</div>
		</Navbar>
	);
};

export default NavigationBar;
