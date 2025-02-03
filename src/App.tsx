import './App.css';

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
	const [showForm, setShowForm] = useState(false);

	// Array containing all menu types.
	const menuTypes = ['services', 'portfolio', 'about'];

	// If hash is empty, set it to the first menu type.
	if (!window.location.hash) {
		window.location.hash = menuTypes[0];
	}

	const handleContactUsClick = () => {
		// Toggle the form visibility.
		setShowForm(showForm ? false : true);
	};

	return (
		<div className='flex flex-col justify-between h-screen'>
			<header className='fixed top-0 w-full h-16 px-[5%] lg:px-10 flex justify-between items-center bg-slate-900 border-b border-slate-700'>
				<svg className='text-style sm:w-36 w-24' width="32mm" height="6.8mm" viewBox="0 0 34 4" xmlns="http://www.w3.org/2000/svg">
					<text x="0" y="5">
						<tspan className='bot-logo-part'>bot</tspan><tspan className='pilots-logo-part'>Pilots</tspan>
					</text>
				</svg>
				<ul className='flex justify-end gap-[10%] sm:text-2xl text-sm'>
					{menuTypes.map((fragment) => (
						<li key={fragment}>
							<a href={`#${fragment}`}
								className='transition-colors hover:text-[#204a87] cursor-pointer'
							>
								{fragment.replace(/-/g, ' ')}
							</a>
						</li>
					))}
				</ul>
			</header>
			<main className='fixed top-16 bottom-16 w-screen'>
				{
					// div container all horizontal sections. Theref
					<div className="flex h-full w-screen overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth">
						<section id="services" className="snap-center flex-shrink-0 w-screen flex lg:items-center items-start justify-center overflow-y-scroll hide-scrollbar p-6 [&>*]:max-w-[800px]">
							<Services />
						</section>
						<section id="portfolio" className="snap-center flex-shrink-0 w-screen flex lg:items-center items-start justify-center overflow-y-scroll hide-scrollbar p-6 [&>*]:max-w-[800px]">
							<Portfolio />
						</section>
						<section id="about" className="snap-center flex-shrink-0 w-screen flex lg:items-center items-start justify-center overflow-y-scroll hide-scrollbar p-6 [&>*]:max-w-[800px]">
							<About />
						</section>
					</div>
				}
			</main >
			<footer className='fixed bottom-0 w-full h-16 flex justify-between items-center px-[5%] lg:px-10 bg-slate-900 border-t border-slate-700 z-10 lg:text-sm text-xs'>
				<p className='text-[#b9d5ff]'>
					&copy; 2025 Botpilots AB</p>
				<span className='flex justify-center items-center gap-5 py-4'>
					<button onClick={() => handleContactUsClick()} className="h-8 w-26 text-nowrap">{showForm ? "close form" : "email us"}</button>
					<a href='https://github.com/hulsbo'>
						<img src={github} alt='GitHub' className='w-8 h-8' />
					</a>
					<a href='https://www.linkedin.com/in/oskar-huledal/'>
						<img src={linkedin} alt='LinkedIn' className='w-8 h-8' />
					</a>
					<a href='https://maps.google.com/?q=57.70887,11.97&ll=51,1.8&z=5'>
						<img src={location} alt='Location' className='w-8 h-8' />
					</a>
				</span>
			</footer>
			<div className={`fixed sm:h-1/2 sm:top-1/4 sm:left-1/8 sm:w-3/4 left-0 bottom-16 top-16 w-full transition-transform duration-1000 ${showForm ? 'translate-y-0' : 'translate-y-[200%]'}`}>
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
			<Portfolio className='w-screen max-w-full' />
		</div>
	</section>
	<section className="snap-center flex-shrink-0 w-screen h-screen flex items-center justify-center bg-green-500">
		<div className="max-w-[800px] w-full px-4 bg-amber-50">
			<About className='w-screen max-w-full' />
		</div>
	</section>
</div>