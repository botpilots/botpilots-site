import tools from '../assets/tools.svg';

const Portfolio = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-8 flex-wrap lg:flex-nowrap'}>
			<img src={tools} width={100} />
			<div className="py-4 space-y-2">
				<h2 className='text-4xl font-bold text-left'>Portfolio</h2>
				<p id="p1" className='text-lg text-left'>
					Apologies, stuff still cooking here.
				</p>
			</div>
		</div>
	);
};

export default Portfolio;