import { useEffect, useState } from 'react';

const BASE_TEXT = "Your AI Integration ";
const WORDS = ["Provider.", "Consultant.", "Partner.", "Specialist."]; // Add more words here
const TYPE_SPEED = 80; // ms per character
const BACKSPACE_SPEED = 40; // ms per character
const WORD_PAUSE = 3000; // ms pause after typing a word

const Services = (props: { className?: string }) => {
	const [displayed, setDisplayed] = useState('');

	useEffect(() => {
		let isCancelled = false;

		const typeWord = async (word: string) => {
			for (let i = 0; i <= word.length; i++) {
				if (isCancelled) return;
				setDisplayed(BASE_TEXT + word.slice(0, i));
				await new Promise(res => setTimeout(res, TYPE_SPEED));
			}
		};

		const backspaceWord = async (word: string) => {
			for (let i = word.length; i >= 0; i--) {
				if (isCancelled) return;
				setDisplayed(BASE_TEXT + word.slice(0, i));
				await new Promise(res => setTimeout(res, BACKSPACE_SPEED));
			}
		};

		const runTypewriter = async () => {
			let wordIndex = 0;
			while (!isCancelled) {
				const word = WORDS[wordIndex];
				await typeWord(word);
				await new Promise(res => setTimeout(res, WORD_PAUSE));
				await backspaceWord(word);
				await new Promise(res => setTimeout(res, 300));
				wordIndex = (wordIndex + 1) % WORDS.length;
			}
		};

		runTypewriter();

		return () => { isCancelled = true; };
	}, []);

	return (
		<div className={props.className + ' flex gap-12 flex-wrap items-center'}>
			{/* <img
                src={image}
                alt="Man sitting at computer."
                className="flex-1 lg:max-w-[250px] max-w-[180px] border-8 border-double border-slate-700"
            /> */}

			<div className="flex-1 flex-col space-y-4 min-w-250px mt-16">
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