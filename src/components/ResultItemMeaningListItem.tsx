export const ResultItemMeaningListItem = ({
	meaning,
	example,
}: { meaning: string; example: string }) => {
	return (
		<li className="text-neutral-800 mb-3 ml-2">
			{meaning}
			<br />
			<p className="text-neutral-500 mt-2">{example}</p>
		</li>
	);
};
