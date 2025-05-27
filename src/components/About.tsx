import image from "../assets/meinpolo_softend.png"

const About = (props: { className?: string }) => {
	return (
		<div className={`${props.className} flex gap-8 items-center flex-wrap sm:flex-nowrap justify-center`}>
			{/* Image */}
			<div className="py-2 sm:mr-4">
				<div className="rounded-full border-8 border-double border-slate-700 h-48 w-48 overflow-hidden my-2">
					<img src={image} alt="Me in polo." className="scale-80 -translate-3" />
				</div>
			</div>
			{/* Text */}
			<div className="py-2 min-w-[250px] space-y-2">
				<h2 className='text-4xl font-bold py-2 text-left'>About</h2>

				<p className='text-lg text-left'>
					Hello, I'm Oskar. I founded BotPilots as I am passionate about helping businesses create innovative, disruptive, and useful products and services. Always having been interested in technology, I graduated in 2019 with a BSc in Innovation Engineering in Product Development and Innovation Management.
				</p>

				<p className='text-lg text-left'>
					In my professional life, I seek to master the systems I act in, to be able to be an agent of change and provide guidance to my peers. I have been working professionally with software development since 2023.
				</p>

				<p className='text-lg text-left'>
					The digital space is buzzing with excitement for advancing the value-creation of current products. Developers responsible for both physical and digital products are currently in a unique position to get ahead of the competition. New technologies are pushing the boundaries of value creation, while new customer expectations drive the market.
				</p>

				<p className='text-lg text-left'>
					With the greatest anticipation to turn your product vision into reality,
				</p>

				<div className="text-left py-2">
					<p>Oskar Huledal - <i>Chief Bot Pilot & Founder</i></p>
				</div>

			</div>
		</div>
	);
};

export default About;