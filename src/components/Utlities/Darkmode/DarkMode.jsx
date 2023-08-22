import React, { useState, useEffect } from 'react';
import './darkmode.css';
import { BrightnessHigh } from 'react-bootstrap-icons';
import { CircleFill } from 'react-bootstrap-icons';

const DarkMode = () => {
	const toggle = 'Toggle';
	const [ name, setName ] = useState(false);
	const [ theme, setTheme ] = useState(localStorage.getItem('theme') || 'light');
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			// setName('Light Mode');
		} else {
			setTheme('light');
			// setName('Dark Mode');
		}
	};
	useEffect(
		() => {
			localStorage.setItem('theme', theme);
			document.body.className = theme;
		},
		[ theme ]
	);
	return (
		<div className={`mode ${theme}`}>
			{/* <button onClick={toggleTheme} className="btn btn-primary">
				{toggle ? name : ''}
			</button> */}
			<BrightnessHigh className="text-primary pills" onClick={toggleTheme} />
		</div>
	);
};
export default DarkMode;
