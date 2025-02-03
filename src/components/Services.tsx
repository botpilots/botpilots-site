import image from '../assets/services_stock.jpg';

const Services = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-12 flex-wrap items-center'}>

			<img src={image} alt="Man sitting at computer." className="flex-1 max-w-[250px] border-8 border-double border-slate-700" />

			<div className="flex-1 flex-col space-y-4 min-w-[250px]">
				<h2 className='text-4xl font-bold text-left'>Our Services</h2>
				<p id="p2" className='text-lg text-left'>
					From dynamic and AI-driven front-end designs to robust, reliable back-end systems,
					BotPilots deliver performant and exciting web applications tailored to user needs and expectations.
				</p>
				<p className='text-lg text-left'>Our services include:</p>
				<ul className='list-disc pl-8 pt-1 text-left'>
					<li>Front-end development</li>
					<li>Back-end and API development</li>
					<li>Web Application Project Management</li>
				</ul>
				<h4 className='italic text-left'>With passion to realise your web application idea!</h4>
			</div>
		</div>
	);
};

export default Services;