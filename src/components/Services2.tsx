import image from '../assets/code_lines.jpg';

const Services = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-12 flex-wrap items-center my-12'}>

			<div className="flex-1 flex-col space-y-4 min-w-[250px] ">
				<p className='text-lg text-left'>We currently offer these services:</p>
				<ul className='list-disc pl-8 pt-1 text-left'>
					<li>Custom web app development (front end & backend)</li>
					<li>Structured authoring in XML and DITA 2.0</li>
					<li>XML CMS integration and migration</li>
					<li>Technical documentation consultancy</li>
					<li>Legacy documentation migration & transformation</li>
					<li>Advice on advanced structured content techniques</li>
				</ul>
				<h4 className='italic font-bold text-left'>We're happy to discuss your needs! If you have any questions, please drop us an email using the button below.</h4>
				<h5 className='italic text-left'>PS. Stay tuned for our upcoming newsletter, sharing the latest in structured content, XML, and technical documentation best practices. Email us if you'd like to be on the early bird list.</h5>
			</div>

			<img src={image} alt="Lines of code." className="flex-1 lg:max-w-[400px] border-8 border-double border-slate-700" />

		</div>
	);
};

export default Services;