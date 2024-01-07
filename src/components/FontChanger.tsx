enum FontStyle {
	Serif = "serif",
	Sans = "sans",
	Mono = "mono",
}

export const FontChanger = () => {
	const setFont = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const chosenFont = event.target.value;
		const body = document.body;

		switch (chosenFont) {
			case FontStyle.Serif:
				body.classList.remove(`font-${FontStyle.Sans}`);
				body.classList.remove(`font-${FontStyle.Mono}`);
				body.classList.add("font-serif");
				break;
			case FontStyle.Sans:
				body.classList.remove(`font-${FontStyle.Serif}`);
				body.classList.remove(`font-${FontStyle.Mono}`);
				body.classList.add("font-sans");
				break;
			case FontStyle.Mono:
				body.classList.remove(`font-${FontStyle.Serif}`);
				body.classList.remove(`font-${FontStyle.Sans}`);
				body.classList.add("font-mono");
				break;
		}
	};

	return (
		<select
			className="border-none bg-white dark:bg-neutral-900 dark:text-white focus:ring-purple-600 rounded-lg w-32 transition-colors"
			name="font-changer"
			onChange={setFont}
		>
			<option value="serif">Serif</option>
			<option value="sans">Sans</option>
			<option value="mono">Mono</option>
		</select>
	);
};
