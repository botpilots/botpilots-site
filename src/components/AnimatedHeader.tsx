import { useEffect, useState, CSSProperties } from 'react';

interface AnimatedHeaderProps {
	baseText: string;
	words: string[];
	typeSpeed?: number;
	backspaceSpeed?: number;
	wordPause?: number;
	breakpoint?: number;
	className?: string;
	style?: CSSProperties;
}

const AnimatedHeader = ({
	baseText,
	words,
	typeSpeed = 80,
	backspaceSpeed = 40,
	wordPause = 3000,
	breakpoint = 650,
	className = '',
	style,
}: AnimatedHeaderProps) => {
	const [displayed, setDisplayed] = useState('');
	const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1000);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Split baseText at last space
	const lastSpaceIdx = baseText.lastIndexOf(' ');
	const baseStart = baseText.slice(0, lastSpaceIdx + 1);
	const baseEnd = baseText.slice(lastSpaceIdx + 1);

	useEffect(() => {
		let isCancelled = false;

		const typeWord = async (word: string) => {
			for (let i = 0; i <= word.length; i++) {
				if (isCancelled) return;
				setDisplayed(word.slice(0, i));
				await new Promise(res => setTimeout(res, typeSpeed));
			}
		};

		const backspaceWord = async (word: string) => {
			for (let i = word.length; i >= 0; i--) {
				if (isCancelled) return;
				setDisplayed(word.slice(0, i));
				await new Promise(res => setTimeout(res, backspaceSpeed));
			}
		};

		const runTypewriter = async () => {
			let wordIndex = 0;
			while (!isCancelled) {
				const word = words[wordIndex];
				await typeWord(word);
				await new Promise(res => setTimeout(res, wordPause));
				await backspaceWord(word);
				await new Promise(res => setTimeout(res, 300));
				wordIndex = (wordIndex + 1) % words.length;
			}
		};

		runTypewriter();

		return () => { isCancelled = true; };
	}, [words, typeSpeed, backspaceSpeed, wordPause]);

	// Logging logic (debug)
	// useEffect(() => {
	// 	if (windowWidth < breakpoint) {
	// 		const preview = baseStart + "|" + baseEnd + displayed;
	// 		console.log(
	// 			`[AnimatedHeader] Page narrow (${windowWidth}px). Line break was inserted here:`,
	// 			preview
	// 		);
	// 	}
	// }, [windowWidth, baseStart, baseEnd, displayed, breakpoint]);

	return (
		<h3 className={`text-4xl font-bold text-left ${className}`} style={style}>
			{baseStart}
			{windowWidth < breakpoint && <br />}
			<span className=''>
				{baseEnd}
			</span>
			{displayed}
			<span className="animate-pulse">|</span>
		</h3>
	);
};

export default AnimatedHeader;