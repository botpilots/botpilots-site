import image from '../assets/code_lines.jpg';

const Services = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-12 flex-wrap items-center'}>

			<img src={image} alt="Lines of code." className="flex-1 lg:max-w-[400px] border-8 border-double border-slate-700" />

			<div className="flex-1 flex-col space-y-4 min-w-[250px] ">
				<p className='text-lg text-left'>We currently offer these services:</p>
				<ul className='list-disc pl-8 pt-1 text-left'>
					<li>Apple Intelligence Integrations</li>
					<li>Custom MCP Server Creation</li>
					<li>Conversational UI Development</li>
					<li>Project Mangement in any of above</li>
					<li>AI strategy in product development</li>
				</ul>
				<h4 className='italic font-bold text-left'>We are happy to discuss your enquiry! If you have any questions, please drop us an email using the button below.</h4>
				<h5 className='italic text-left'>PS. Stay tuned for the release of our monthly newsletter, summarizing the newest advancements made in AI, as well as general recommendations for businessesss who wish to thrive in the AI era.</h5>
			</div>
		</div>
	);
};

export default Services;