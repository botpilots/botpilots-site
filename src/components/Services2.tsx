import image from '../assets/code_lines.jpg';

const Services = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-12 flex-wrap items-center'}>

			<img src={image} alt="Lines of code." className="flex-1 lg:max-w-[400px] border-8 border-double border-slate-700" />

			<div className="flex-1 flex-col space-y-4 min-w-[250px]">
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