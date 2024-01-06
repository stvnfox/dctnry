export const ResultItemSynonyms = ({ synonyms }: { synonyms: string[] }) => {
	return (
		<section className="flex gap-8">
			<h4 className="text-neutral-400 mb-3">Synonyms</h4>
			<ul className="flex gap-4">
				{synonyms.map((synonym, index) => (
					<li
						key={`synonym-${index}`}
						className="font-semibold text-purple-600"
					>
						{synonym}
					</li>
				))}
			</ul>
		</section>
	);
};
