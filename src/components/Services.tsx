import AnimatedHeader from './AnimatedHeader';

const BASE_TEXT = "Looking for consultancy in  ";
const WORDS = ["GenAI?", "XML?", "frontend?", "backend?", "AI translations?", "AI validations?"];
const TYPE_SPEED = 100;
const BACKSPACE_SPEED = 80;
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
					className='simple-fade-in'
					style={{ animationDuration: '0.8s', animationDelay: '0s' }}
					animationDelay={10000}
					baseText={BASE_TEXT}
					words={WORDS}
					typeSpeed={TYPE_SPEED}
					backspaceSpeed={BACKSPACE_SPEED}
					wordPause={WORD_PAUSE}
				/>
				<h3 className="text-2xl font-light text-left">
					<span
						className="simple-fade-in"
						style={{ animationDuration: '1s', animationDelay: '2s' }}
					>
						With a rare to find expertise in both AI, XML and fullstack,{' '}
					</span>
					<span
						className="simple-fade-in"
						style={{ animationDuration: '1s', animationDelay: '4s' }}
					>
						we offer innovative services and consultancy{' '}
					</span>
					<span
						className="simple-fade-in"
						style={{ animationDuration: '1s', animationDelay: '6s' }}
					>
						to businesses working with technical documentation.
					</span>
				</h3>
				<p 
					className='text-left fade-in'
					style={{ animationDuration: '1s', animationDelay: '8s' }}
				>
					To learn more - scroll, swipe or press an arrow.
				</p>
			</div>

		</div>
	);
};

export default Services;