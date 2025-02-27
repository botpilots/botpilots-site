import tools from '../assets/laptop-code-solid.svg';

const cases = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-8 flex-wrap sm:flex-nowrap'}>
			<img src={tools} width={100} />
			<div className="py-4 space-y-2">
				<h2 className='text-4xl font-bold text-left'>Cases</h2>
				<p id="p1" className='text-lg text-left'>
					Scroll down for cases
				</p>
			</div>
		</div>
	);
};

export default cases;