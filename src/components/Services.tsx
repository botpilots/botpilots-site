import AnimatedHeader from './AnimatedHeader';

const BASE_TEXT = "Looking for consultancy in  ";
const WORDS = ["GenAI?", "XML?", "frontend?", "backend?"];
const TYPE_SPEED = 80;
const BACKSPACE_SPEED = 40;
const WORD_PAUSE = 3000;

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
				Focusing on businesses working with technical documentation, we offer digital services and consultancy with a rare to find expertise in Agentic GenAI, XML transformations and fullstack development.
				</h3>
				<p className='text-left'>To learn more - swipe, scroll or press an arrow.</p>
			</div>

		</div>
	);
};

export default Services;