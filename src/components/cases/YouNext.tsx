import younext from '../../assets/younext.jpg'

const cases = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-8 flex-wrap sm:flex-nowrap my-12'}>
			<div className="py-4 space-y-2">
				<div>
					<img src={younext} width={400} className='justify-self-center' />
					<h3 className='text-4xl font-bold text-left mt-8'>Your Company Here?</h3>
					<p className='text-lg text-left my-2'>
						Will you be our next successful project? If you're in need of web development we would be happy to hear from you!
						We have liability insurance and pretty good humour too.
					</p>
					<p className='text-lg text-left my-2'>
						You can reach us via the <b>email us</b> button below. First meeting is on us!
					</p>
				</div>
			</div>
		</div >
	);
};

export default cases;