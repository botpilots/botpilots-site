import image from '../assets/code_lines.jpg';

const Services = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-12 flex-wrap items-center my-12'}>

			<div className="flex-1 flex-col space-y-4 min-w-[250px] ">
				<p className='text-lg text-left'>We currently offer these services:</p>
				<ul className='list-disc pl-8 pt-1 text-left'>
					<li>Innovation Project Management in GenAI, Frontend and Backend.</li>
					<li>XML data, integrations, migrations and web publishing projects.</li>
					<li>Advice on advanced structured authoring using XML and DITA 2.0.</li>
					<li><b>NEW:</b> Automatic Translation and Translation Validation Pipelines for XML based documents using agentic GenAI.</li>
				</ul>
				<h4 className='italic font-bold text-left'>We're happy to discuss your needs! If you have any questions, please drop us an email using the button below.</h4>
			</div>

			<img src={image} alt="Lines of code." className="flex-1 lg:max-w-[400px] border-8 border-double border-slate-700" />

		</div>
	);
};

export default Services;