import AnimatedHeader from './AnimatedHeader';

const BASE_TEXT = "Your AI Integration ";
const WORDS = ["Provider.", "Consultant.", "Partner.", "Specialist."]; // Add more words here
const TYPE_SPEED = 80; // ms per character
const BACKSPACE_SPEED = 40; // ms per character
const WORD_PAUSE = 3000; // ms pause after typing a word



const Services = (props: { className?: string }) => {

	return (
		<div className={props.className + ' flex gap-12 flex-wrap items-center my-12'}>
			{/* <img
                src={image}
                alt="Man sitting at computer."
                className="flex-1 lg:max-w-[250px] max-w-[180px] border-8 border-double border-slate-700"
            /> */}

			<div className="flex-1 flex-col space-y-4 min-w-250px">
				<AnimatedHeader
					baseText={BASE_TEXT}
					words={WORDS}
					typeSpeed={TYPE_SPEED}
					backspaceSpeed={BACKSPACE_SPEED}
					wordPause={WORD_PAUSE}
				/>
				<h3 className="text-2xl font-light text-left">
					BotPilots offer specialised expertise in integrating your digital product with Generative AI.
				</h3>
				<p className='text-left'>The digital landscape is in constant transformation. Users are currently shifting their attention from search engines to chatbots, seeking solutions providing minimal friction and which intuitively comprehend their needs.
				</p>
				<p className="text-left font-bold text-2xl">
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