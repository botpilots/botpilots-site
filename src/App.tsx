import './App.css';
import logo from './assets/logo.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import location from './assets/location.svg';
import { useState } from 'react';
import Portfolio from './components/Portfolio.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Form from './components/Form.tsx';

function App() {

	// Width of the header logo.
	const headerWidth = '150px';

	// useState for currently active menu (fragment value).
	const [displayedMenu, setDisplayedMenu] = useState('');
	const [showForm, setShowForm] = useState(false);

	// Array containing all menu types.
	const menuTypes = ['services', 'portfolio', 'about'];

	// Persist currentFragment and showForm in localStorage.
	if (displayedMenu === '') {
		const storedFragment = localStorage.getItem('currentFragment');
		setDisplayedMenu(storedFragment || 'services');
	}

	// Store newly selected fragment in localStorage.
	localStorage.setItem('currentFragment', displayedMenu);

	// Handle onClick event for menu items.
	const handleOnClick = (fragment: string) => {
		setDisplayedMenu(fragment);
	}

	const handleContactUsClick = () => {
		// Toggle the form visibility.
		setShowForm(showForm ? false : true);
	};

	return (
		<div className='flex flex-col justify-between h-screen'>
			<header className='flex justify-between items-between px-16 bg-slate-900 border-b border-slate-700 flex-wrap'>
				<img src={logo} alt='Botpilots Logo' width={headerWidth} className='mb-2' />
				<nav className='flex justify-center items-center'>
					<ul className='flex gap-16 text-2xl my-8 text-[#3465a4]'>
						{menuTypes.map((fragment) => (
							<li key={fragment}>
								<p
									className='transition-colors hover:text-[#204a87] cursor-pointer'
									onClick={() => handleOnClick(fragment)}
								>
									{fragment.replace(/-/g, ' ')}
								</p>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<main className='flex flex-col justify-center items-center'>
				<section className='flex flex-col justify-start items-center gap-5 w-3/5 text-[#b9d5ff] h-48'>
					{
						// Display content based on currentFragment, rendering the corresponding component.
						<div className='relative w-full h-full'>
							<Services className={`absolute inset-0 transition-opacity duration-300 ${displayedMenu === 'services' ? 'ease-in delay-300 opacity-100' : 'ease-out opacity-0'}`} />
							<Portfolio className={`absolute inset-0 transition-opacity duration-300 ${displayedMenu === 'portfolio' ? 'ease-in delay-300 opacity-100' : 'ease-out opacity-0'}`} />
							<About className={`absolute inset-0 transition-opacity duration-300 ${displayedMenu === 'about' ? 'ease-in delay-300 opacity-100' : 'ease-out opacity-0'}`} />
						</div>
					}
				</section>
			</main>
			<footer className='flex justify-between items-center px-16 bg-slate-900 border-t border-slate-700 z-10'>
				<p className='text-[#b9d5ff]'>
					&copy; 2025 Botpilots</p>
				<span className='flex justify-center items-center gap-5 py-4'>
					<button onClick={() => handleContactUsClick()}>Contact Us</button>
					<a href='https://github.com/hulsbo'>
						<img src={github} alt='GitHub' className='w-10 h-10' />
					</a>
					<a href='https://www.linkedin.com/in/oskar-huledal/'>
						<img src={linkedin} alt='LinkedIn' className='w-10 h-10' />
					</a>
					<a href='https://maps.google.com/?q=57.70887,11.97&ll=51,1.8&z=5'>
						<img src={location} alt='Location' className='w-10 h-10' />
					</a>
				</span>
			</footer>
			<div className={`fixed bottom-19 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 transition-transform duration-500 ${showForm ? 'translate-y-0' : 'translate-y-full'} overflow-hidden`}>
				<Form setShowForm={setShowForm}/>
			</div>
		</div>
	);
}

export default App;
