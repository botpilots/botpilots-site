import image from '../assets/services_stock.jpg';

const Services = (props: { className: string }) => {
	return (

		<div className={props.className + ' flex'}>

			<div>
			<img src={image} alt="Man sitting at computer." className="w-1/2 border-8 border-double border-slate-700" />
			<img src={image} alt="Man sitting at computer." className="w-1/2 border-8 border-double border-slate-700" />
			<img src={image} alt="Man sitting at computer." className="w-1/2 border-8 border-double border-slate-700" />
			<img src={image} alt="Man sitting at computer." className="w-1/2 border-8 border-double border-slate-700" />
			</div>
		</div>
	);
};

export default Services;


// <div className={props.className + ' flex'}>
// <img src={image} alt="Man sitting at computer." className="h-48 border-8 border-double  border-slate-700"/>
// <div className="flex flex-col space-y-4">
// 	<h2 className='text-4xl font-bold text-left'>Our Services</h2>
// 	<p id="p2" className='text-lg text-left'>
// 		From dynamic and AI-driven front-end designs to robust, reliable back-end systems,
// 		BotPilots deliver performant and exciting web applications tailored to user needs and expectations.
// 	</p>
// 	<p className='text-lg text-left'>Our services include:</p>
// 	<ul className='list-disc pl-8 pt-1 text-left'>
// 		<li>Front-end development</li>
// 		<li>Back-end and API development</li>
// 		<li>Web Application Project Management</li>
// 	</ul>
// 	<p className='text-lg text-left'>
// 		We use only performant and reliable technologies to deliver a fast, stable and effective web application tailored to your needs.
// 	</p>
// 	<h4 className='italic text-left'>With passion to realise your web application idea!</h4>
// </div>
// </div>