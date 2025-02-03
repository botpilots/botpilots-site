import image from "../assets/meinpolo_softend.png"

const About = (props: { className?: string }) => {
	return (
		<div className={`${props.className} flex gap-8 items-center flex-wrap lg:flex-nowrap justify-center`}>
			{/* Image */}
			<div className="py-2 lg:mr-4">
				<div className="rounded-full border-8 border-double border-slate-700 h-48 w-48 overflow-hidden my-2">
					<img src={image} alt="Me in polo." className="scale-80 -translate-3" />
				</div>
			</div>
			{/* Text */}
			<div className="py-2 min-w-[250px] space-y-2">
				<h2 className='text-4xl font-bold py-2 text-left'>About</h2>
				<p className='text-lg text-left'>
					Hello, I'm Oskar!
				</p>
				<p className='text-lg text-left'>
					I founded BotPilots to combine my passion for coding with helping companies realize their web app visions. I'm excited to offer you my expertise in implementing the web technologies of tomorrow.
				</p>
				<p className='text-lg text-left'>
					Let's turn dreams into reality together!				</p>
				<div className="text-left py-2">
					<p>Oskar Huledal - <i>Chief Bot Pilot & Founder</i></p>
				</div>
			</div>
		</div>
	);
};

export default About;