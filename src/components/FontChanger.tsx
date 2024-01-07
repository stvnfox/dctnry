enum FontStyle {
	Serif = "serif",
	Sans = "sans",
}

export const FontChanger = () => {
	const setFont = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const chosenFont = event.target.value;
		const body = document.body;

		if (body.classList.contains(`font-${FontStyle.Serif}`)) {
			body.classList.remove(`font-${FontStyle.Serif}`);
		} else {
			body.classList.remove(`font-${FontStyle.Sans}`);
		}

		body.classList.add(`font-${chosenFont}`);
	};

	return (
		<select
			className="border-none bg-white dark:bg-neutral-900 dark:text-white focus:ring-purple-600 rounded-lg w-32 transition-colors"
			name="font-changer"
			onChange={setFont}
		>
			<option value="serif">Serif</option>
			<option value="sans">Sans-serif</option>
		</select>
	);
};
