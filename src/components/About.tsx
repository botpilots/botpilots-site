import image from "../assets/meinpolo_softend.png"

const About = (props: { className?: string }) => {
	return (
		<div className={`${props.className} flex gap-8 items-center flex-wrap sm:flex-nowrap justify-center my-12`}>
			{/* Image */}
			<div className="py-2 sm:mr-4">
				<div className="rounded-full border-8 border-double border-slate-700 h-48 w-48 overflow-hidden my-2">
					<img src={image} alt="Me in polo." className="scale-80 -translate-3" />
				</div>
			</div>
			{/* Text */}
			<div className="py-2 min-w-[250px] space-y-2">
				<h2 className='text-4xl font-bold py-2 text-left'>About</h2>

				<p className="text-left">
					Hello, I'm Oskar. I have since 2021 been working professionally with technical documentation in different roles, both operationally as a technical author but mostly "under the hood" as an employed and self-employed software developer.
				</p>

				<p className='text-left'>
					Convinced that a small business can deliver exceptional value today, it combining AI-driven business operations with domain expertise, I took the decision to found BotPilots in 2025 with one mission in mind - <b>to innovate</b>.
				</p>
				<p className='text-left'>
					Today, AI offers a significant competitive advantage to businesses developing both physical and digital products. This is especially true for technical documentation—an industry poised for transformative cost savings and efficiency gains.</p>

				<p className='text-left'>
					At BotPilots, we believe Generative AI shouldn’t replace human ingenuity, but augment it. Its role is to handle the meticulous but all-important task of keeping product information perfectly accurate and up-to-date. While humans remain the origin of content, AI enhances, mediates and validates it - reassuring its quality while reducing delivery times and costs.</p>

				{/* <p className='text-left'>
					Our human minds are not to be reduced to cogs of industry, but should remain engines of creativity. By delegating the details to AI, we can redirect the human mind away from repetitive tasks and towards what it does best: creating a more human-oriented future.</p> */}


				<p className='text-left'>
					With the greatest anticipation to turn your product or content visions into reality!
				</p>

				<div className="text-left py-2">
					<p>Oskar Huledal - <i>Chief "Bot Pilot" & Founder</i></p>
				</div>

			</div>
		</div>
	);
};

export default About;