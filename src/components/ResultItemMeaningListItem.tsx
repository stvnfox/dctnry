export const ResultItemMeaningListItem = ({
	meaning,
	example,
}: { meaning: string; example: string }) => {
	return (
		<li className="text-neutral-800 dark:text-white mb-3 ml-2 transition-colors">
			{meaning}
			{example && <p className="text-neutral-400 mt-2">"{example}"</p>}
		</li>
	);
};
