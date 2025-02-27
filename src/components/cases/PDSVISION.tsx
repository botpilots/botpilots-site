
import pdsvision from '../../assets/pdsvision_logo.png'

const cases = (props: { className?: string }) => {
	return (
		<div className={props.className + ' flex gap-8 flex-wrap sm:flex-nowrap'}>
			<div className="py-4 space-y-2">
				<div>
					<img src={pdsvision} width={400} className='justify-self-center' />
					<h3 className='text-4xl font-bold text-left mt-8'>XSLT development for PDSVISION</h3>
					<p className='text-lg text-left my-2'>
						Several XSLT transforms were developed on behalf of a customer to PDSVISION,
						which were in need of a custom XML data pipeline for an integration project between their PLM, CREO Illustrate and Simonsoft CMS.
						The work was done in time and well recieved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default cases;