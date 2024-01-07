export const ResultItemWordInfo = ({
	word,
	phonetic,
}: { word: string; phonetic: string }) => {
	return (
		<div>
			<h2 className="text-5xl font-bold text-neutral-800 dark:text-white mb-1 transition-colors">
				{word}
			</h2>
			<p className="text-lg text-purple-600">{phonetic}</p>
		</div>
	);
};
