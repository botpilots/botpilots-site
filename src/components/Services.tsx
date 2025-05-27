import image from '../assets/services_stock.jpg';

const Services = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-12 flex-wrap items-center'}>
			<img
				src={image}
				alt="Man sitting at computer."
				className="flex-1 lg:max-w-[250px] border-8 border-double border-slate-700"
			/>

			<div className="flex-1 flex-col space-y-4 min-w-250px">
				<h3 className="text-4xl font-bold text-left">
					Your AI Integration Provider
				</h3>
				<h3 className="text-2xl font-light text-left">
					We offer specialised expertise in integrating your digital product with Generative AI.
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