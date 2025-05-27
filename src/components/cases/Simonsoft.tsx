import simonsoft from '../../assets/simonsoft_logo.webp'

const cases = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-8 flex-wrap sm:flex-nowrap my-12'}>
			<div className="py-4 space-y-2">
				<div>
					<img src={simonsoft} width={500} className='justify-self-center' />
					<h3 className='text-4xl font-bold text-left mt-8'>Simonsoft Web Editor</h3>
					<p className='text-lg text-left my-2'>						Simonsoft Web Editor is an XML editor integrated into Simonsoft's SaaS, now used daily by their customers' many technical writers.
						Its purpose is to facilitate a simple user experience and faster workflow for structured authoring with XML.

					</p>
					<p className='text-lg text-left my-2'>
						BotPilots is currently helping Simonsoft with the ongoing development of the editor.
					</p>
				</div>
			</div>
		</div >
	);
};

export default cases;