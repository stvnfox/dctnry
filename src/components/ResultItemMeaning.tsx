import { DictionaryMeaning } from "../store/dictionary.store";
import { ResultItemMeaningListItem } from "./ResultItemMeaningListItem";
import { ResultItemSynonyms } from "./ResultItemSynonyms";

export const ResultItemMeaning = ({
	meaning,
	title,
}: { meaning: DictionaryMeaning; title: string }) => {
	return (
		<section className="mb-10">
			<div className="relative w-full after:absolute after:left-0 after:bottom-1/2 after:w-full after:h-[2px] after:-translate-y-[calc(50%-2px)] after:z-[-1] after:bg-purple-100 dark:after:bg-white mb-8">
				<h3 className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white text-xl font-bold lowercase italic w-fit pr-6 transition-colors">
					{title}
				</h3>
			</div>
			<h4 className="text-neutral-400 mb-3">Meaning</h4>
			<ul className="list-disc marker:text-purple-600 ml-8 mb-8">
				{meaning.definitions.map((definition, index) => (
					<ResultItemMeaningListItem
						key={`definition-noun-${index}`}
						meaning={definition.definition}
						example={definition.example}
					/>
				))}
			</ul>
			{meaning.synonyms.length > 0 && (
				<ResultItemSynonyms synonyms={meaning.synonyms} />
			)}
		</section>
	);
};
