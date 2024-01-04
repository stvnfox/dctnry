export const ResultItemWordInfo = ({
	word,
	phonetic,
}: { word: string; phonetic: string }) => {
	return (
		<div>
			<h2 className="text-5xl font-bold text-neutral-800 mb-1">{word}</h2>
			<p className="text-lg text-purple-600">{phonetic}</p>
		</div>
	);
};
