import { DictionaryMeaning } from "../store/dictionary.store";

export const ResultItemMeaningNoun = ({
	meaning,
}: { meaning: DictionaryMeaning }) => {
	return (
		<section className="mb-10">
			<div className="relative w-full after:absolute after:left-0 after:bottom-1/2 after:w-full after:h-[2px] after:-translate-y-[calc(50%-2px)] after:z-[-1] after:bg-purple-100 mb-8">
				<h3 className="bg-white text-neutral-800 text-xl font-bold lowercase italic w-fit pr-6">
					Noun
				</h3>
			</div>
			<h4 className="text-neutral-500 mb-3">Meaning</h4>
			<div>{JSON.stringify(meaning)}</div>
		</section>
	);
};
