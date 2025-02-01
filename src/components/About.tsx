import image from "../assets/meinpolo_softend.png"

const About = (props: { className: string }) => {
	return (
		<div className={props.className + ' flex gap-16 items-center'}>
			{/* Image */}
			<div className="flex flex-col py-4">
				<div className="rounded-full border-8 border-double border-slate-700 h-48 w-48 overflow-hidden my-2">
					<img src={image} alt="Me in polo." className="scale-80 -translate-3" />
				</div>
			</div>
			{/* Text */}
			<div className="flex flex-col py-4">
				<h2 className='text-4xl font-bold py-4 text-left'>About</h2>
				<p className='text-lg text-left'>
					At BotPilots, we provide consulting services focused on developing AI-driven web interfaces and applications.
					Our team excels at crafting intelligent, user-friendly solutions that enhance digital experiences and bring your vision to life.
				</p>
				<div className="text-left py-4">
					<p>Oskar Huledal - <i>Chief Bot Pilot & Founder</i></p>

				</div>
			</div>
		</div>
	);
};

export default About;