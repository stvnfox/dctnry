import { MutableRefObject, useRef, useState } from "react";
import { DictionaryPhonetic } from "../store/dictionary.store";

export const ResultItemAudioButton = ({
	id,
	item,
}: { id: string | undefined; item: DictionaryPhonetic }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioElement = useRef(null as null | HTMLAudioElement);

	const checkIfPlaying = (element: MutableRefObject<HTMLAudioElement | null> | null) => {
		const interval = setInterval(() => {
			if (element && element.current && !element.current.paused) {
				setIsPlaying(true);
			} else {
				setIsPlaying(false);
				clearInterval(interval);
			}
		}, 100);
	};

	const togglePlay = (id: string | undefined) => {
		if (!id) return;

		if (isPlaying) {
			audioElement.current?.pause();
		} else {
			audioElement.current?.play();
		}

		checkIfPlaying(audioElement);
	};

	return (
		<div>
			<audio ref={audioElement} src={item.audio}>
				<track kind="captions" />
			</audio>
			<button
				type="button"
				className="group flex justify-center items-center bg-purple-200 hover:bg-purple-300 rounded-full transition-colors h-16 w-16"
				onClick={() => togglePlay(id)}
			>
				{isPlaying ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="fill-purple-800 w-5 h-5"
					>
						<title>Pause</title>
						<path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="fill-purple-800 w-5 h-5"
					>
						<title>Play</title>
						<path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
					</svg>
				)}
			</button>
		</div>
	);
};
