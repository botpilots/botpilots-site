import React, { useEffect, useState } from 'react';
import image from '../assets/BP_landing.png';

const TYPEWRITER_TEXT = "Your AI Integration Provider.";
const TYPE_SPEED = 80; // ms per character

const Services = (props: { className?: string }) => {
	const [displayed, setDisplayed] = useState('');

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			setDisplayed(TYPEWRITER_TEXT.slice(0, i + 1));
			i++;
			if (i === TYPEWRITER_TEXT.length) clearInterval(interval);
		}, TYPE_SPEED);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={props.className + ' flex gap-12 flex-wrap items-center'}>
			{/* <img
                src={image}
                alt="Man sitting at computer."
                className="flex-1 lg:max-w-[250px] max-w-[180px] border-8 border-double border-slate-700"
            /> */}

			<div className="flex-1 flex-col space-y-4 min-w-250px">
				<h3 className="text-4xl font-bold text-left">
					{displayed}
					<span className="animate-pulse">|</span>
				</h3>
				<h3 className="text-2xl font-light text-left">
					BotPilots offer specialised expertise in integrating your digital product with Generative AI.
				</h3>
				<p className='text-left'>The digital landscape is transforming. Users are shifting their attention from search engines to chatbots, seeking solutions providing minimal friction and which intuitively comprehend their needs.
				</p>
				<p className="text-left text-lg">
					We make your product ready for the age of AI:
				</p>
				<ul className='list-disc pl-8 pt-1 text-left flex flex-col gap-2'>
					<li>Enhance your digital discoverability by integrating with the LLM systems your customers use today.</li>
					<li>Offer to your customers an exceptional Conversational UI experience.</li>
					<li>Stay competitive as new demands arise for products understanding user intuition.</li>
				</ul>
			</div>

		</div>
	);
};

export default Services;