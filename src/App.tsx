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

	// useState for currently active menu (fragment value).
	// TODO: consier removing this state, as it is not used.
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
			<header className='lg:flex lg:justify-between items-center fixed top-0 w-full px-[5%] bg-slate-900 border-b border-slate-700'>
				<div className='lg:none flex justify-center items-center lg:mt-0 mt-4'>
					<img src={logo} alt='Botpilots Logo' className='lg:w-36 w-32' />
				</div>
				<nav className='flex justify-center'>
					<ul className='flex justify-center gap-8 text-2xl my-8 text-[#3465a4] w-full'>
						{menuTypes.map((fragment) => (
							<li key={fragment}>
								<a href={`#${fragment}`}
									className='transition-colors hover:text-[#204a87] cursor-pointer'
									onClick={() => handleOnClick(fragment)}
								>
									{fragment.replace(/-/g, ' ')}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<main className='fixed lg:top-24 top-40 bottom-24 w-screen flex items-center justify-center overflow-y-scroll hide-scrollbar'>
				{
					// Display content based on currentFragment, rendering the corresponding component.

					<div className="max-h-full flex overflow-x-auto snap-x snap-mandatory w-screen hide-scrollbar scroll-smooth">
						<section className="snap-center flex-shrink-0 w-screen flex items-center justify-center">
							<div className="max-h-full max-w-[800px] w-full p-8" id="services">
								<Services className='' />
							</div>
						</section>
						<section className="max-h-full snap-center flex-shrink-0 w-screen flex items-center justify-center">
							<div className="max-w-[800px] w-full px-8" id="portfolio">
								<Portfolio className='' />
							</div>
						</section>
						<section className="max-h-full snap-center flex-shrink-0 w-screen flex items-center justify-center">
							<div className="max-w-[800px] w-full p-8" id="about">
								<About className='' />
							</div>
						</section>
					</div>
				}
			</main >
			<footer className='fixed bottom-0 w-full h-24 flex justify-between items-center px-[5%] bg-slate-900 border-t border-slate-700 z-10 lg:text-sm text-xs'>
				<p className='text-[#b9d5ff]'>
					&copy; 2025 Botpilots</p>
				<span className='flex justify-center items-center gap-5 py-4'>
					<button onClick={() => handleContactUsClick()}>Contact Us</button>
					<a href='https://github.com/hulsbo'>
						<img src={github} alt='GitHub' className='lg:w-10 lg:h-10 w-6 h-6' />
					</a>
					<a href='https://www.linkedin.com/in/oskar-huledal/'>
						<img src={linkedin} alt='LinkedIn' className='lg:w-10 lg:h-10 w-6 h-6' />
					</a>
					<a href='https://maps.google.com/?q=57.70887,11.97&ll=51,1.8&z=5'>
						<img src={location} alt='Location' className='lg:w-10 lg:h-10 w-6 h-6' />
					</a>
				</span>
			</footer>
			<div className={`fixed bottom-24 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 transition-transform duration-500 ${showForm ? 'translate-y-0' : 'translate-y-full'} overflow-hidden`}>
				<Form setShowForm={setShowForm} />
			</div>
		</div >
	);
}

export default App;



<div className="flex overflow-x-auto snap-x snap-mandatory w-screen h-screen">
	<section className="snap-center flex-shrink-0 w-screen h-screen flex items-center justify-center bg-red-500">
		<div className="max-w-[800px] w-full px-4 bg-amber-50">
			<Services className='w-screen max-w-full' />
		</div>
	</section>
	<section className="snap-center flex-shrink-0 w-screen h-screen flex items-center justify-center bg-blue-500">
		<div className="max-w-[800px] w-full px-4 bg-amber-50">
			<Portfolio className='w-screen max-w-full' /></div>
	</section>
	<section className="snap-center flex-shrink-0 w-screen h-screen flex items-center justify-center bg-green-500">
		<div className="max-w-[800px] w-full px-4 bg-amber-50">							<About className='w-screen max-w-full' /></div>
	</section>
</div>