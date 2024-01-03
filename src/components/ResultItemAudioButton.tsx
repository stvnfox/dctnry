import { useState } from "react";
import { DictionaryPhonetic } from "../store/dictionary.store";

export const ResultItemAudioButton = ({
	id,
	item,
}: { id: string | undefined; item: DictionaryPhonetic }) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const checkIfPlaying = (element: HTMLAudioElement) => {
		const interval = setInterval(() => {
			if (!element.paused) {
				setIsPlaying(true);
			} else {
				setIsPlaying(false);
				clearInterval(interval);
			}
		}, 100);
	};

	const togglePlay = (id: string | undefined) => {
		if (!id) return;

		const audioElement = document.getElementById(id) as HTMLAudioElement;

		if (isPlaying) {
			audioElement.pause();
		} else {
			audioElement.play();
		}

		checkIfPlaying(audioElement);
	};

	return (
		<div>
			<audio id={id} src={item.audio}>
				<track kind="captions" />
			</audio>
			<button type="button" onClick={() => togglePlay(id)}>
				{/* TODO: Add icon instead of text */}
				{isPlaying ? "Pause" : "Play"}
			</button>
		</div>
	);
};
