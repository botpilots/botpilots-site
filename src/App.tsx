import './App.css';

import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import location from './assets/location.svg';
import { useState } from 'react';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Form from './components/Form.tsx';
import ScrollNotifier from './components/ScrollNotifier.tsx';
import { useHashBasedScrolling } from './utils/useHashBasedScrolling.ts';
import Services2 from './components/Services2.tsx';
import Cases from './components/Cases.tsx';
import Simonsoft from './components/cases/Simonsoft.tsx';
import PDSVISION from './components/cases/PDSVISION.tsx';
import YouNext from './components/cases/YouNext.tsx';

function App() {
	// useState for form visibility
	const [showForm, setShowForm] = useState(false);

	// Array containing all menu types.
	const menuTypes = ['services', 'about', 'cases'];

	// If hash is empty, set it to the first menu type.
	if (!window.location.hash) {
		window.location.hash = menuTypes[0];
	}

	// Get ref and current hash from the hash-based scrolling hook
	const { scrollContainerRef, currentHash } = useHashBasedScrolling();

	const handleContactUsClick = () => {
		// Toggle the form visibility.
		setShowForm(showForm ? false : true);
	};

	return (
		<div className='flex flex-col justify-between h-screen'>
			<header className='fixed top-0 w-full h-16 px-[5%] sm:px-10 flex justify-between items-center bg-slate-900 border-b border-slate-700'>
				<svg overflow="visible" className='text-style sm:w-36 w-24' width="32mm" height="7mm" viewBox="0 0 34 4" xmlns="http://www.w3.org/2000/svg">
					<text x="0" y="5">
						<tspan className='bot-logo-part'>bot</tspan><tspan className='pilots-logo-part'>Pilots</tspan>
					</text>
				</svg>
				<ul className='flex justify-end gap-[10%] sm:text-2xl text-sm'>
					{menuTypes.map((fragment) => (
						<li key={fragment}>
							<a href={`#${fragment}`}
								className={`transition-colors hover:text-[#b9d5ff] cursor-pointer text-[#204a87] ${currentHash === `#${fragment}` && 'text-[#b9d5ff]'
									}`}
							>
								{fragment.replace(/-/g, ' ')}
							</a>
						</li>
					))}
				</ul>
			</header>
			<main className='fixed top-16 bottom-16 w-screen'>
				{/* Fixed scroll notifiers that fade out when scrolling */}
				<ScrollNotifier direction="left" />
				<ScrollNotifier direction="right" />
				<ScrollNotifier direction="up" />
				<ScrollNotifier direction="down" />

				{
					// div container all horizontal sections with nested vertical snap scrolling
					<div ref={scrollContainerRef} className="flex h-full w-screen overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth">
						<section id="services" className="snap-center flex-shrink-0 w-screen flex flex-col sm:items-center items-start justify-start overflow-y-scroll sm:snap-y sm:snap-mandatory hide-scrollbar p-6 mobile-scroll-section">
							<div className="sm:snap-center sm:flex-shrink-0 sm:min-h-full min-h-fit w-full flex sm:items-center items-start justify-center mb-6 [&>*]:max-w-[800px]">
								<Services />
							</div>
							<div className="sm:snap-center sm:flex-shrink-0 sm:min-h-full min-h-fit w-full flex sm:items-center items-start justify-center [&>*]:max-w-[800px]">
								<Services2 />
							</div>
						</section>
						<section id="about" className="snap-center flex-shrink-0 w-screen flex flex-col sm:items-center items-start justify-start overflow-y-scroll sm:snap-y sm:snap-mandatory hide-scrollbar p-6 mobile-scroll-section">
							<div className="sm:snap-center sm:flex-shrink-0 sm:min-h-full min-h-fit w-full flex sm:items-center items-start justify-center mb-6 [&>*]:max-w-[800px]">
								<About />
							</div>
						</section>
						<section id="cases" className="snap-center flex-shrink-0 w-screen flex flex-col sm:items-center items-start justify-start overflow-y-scroll sm:snap-y sm:snap-mandatory hide-scrollbar p-6 mobile-scroll-section">
							{/* Extra margin on mobile (300px) needed for scroll arrow buttons to properly detect and navigate between different case study sections */}
							<div className="sm:snap-center sm:flex-shrink-0 sm:min-h-full min-h-fit w-full flex sm:items-center items-start justify-center sm:mb-6 mb-[300px] [&>*]:max-w-[800px]">
								<Cases />
							</div>
							<div className="sm:snap-center sm:flex-shrink-0 sm:min-h-full min-h-fit w-full flex sm:items-center items-start justify-center [&>*]:max-w-[800px]">
								<Simonsoft />
							</div>
							<div className="sm:snap-center sm:flex-shrink-0 sm:min-h-full min-h-fit w-full flex sm:items-center items-start justify-center [&>*]:max-w-[800px]">
								<PDSVISION />
							</div>
							<div className="sm:snap-center sm:flex-shrink-0 sm:min-h-full min-h-fit w-full flex sm:items-center items-start justify-center [&>*]:max-w-[800px]">
								<YouNext />
							</div>
						</section>
					</div>
				}
			</main>
			<footer className='fixed bottom-0 w-full h-16 flex justify-between items-center px-[5%] sm:px-10 bg-slate-900 border-t border-slate-700 z-10 sm:text-sm text-xs'>
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
			<div className={`fixed sm:h-1/2 sm:min-h-[425px] sm:top-1/4 sm:left-1/8 sm:w-3/4 left-0 bottom-16 top-16 w-full transition-transform duration-1000 ${showForm ? 'translate-y-0' : 'translate-y-[200%]'}`}>
				<Form setShowForm={setShowForm} />
			</div>
		</div>
	);
}

export default App;