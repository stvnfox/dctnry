import { DictionaryResult } from "../store/dictionary.store";
import { ResultItemAudioButton } from "./ResultItemAudioButton";
import { ResultItemWordInfo } from "./ResultItemWordInfo";
import { ResultItemMeaning } from "./ResultItemMeaning";
import { ResultItemSources } from "./ResultItemSources";

enum MeaningType {
	Noun = "noun",
	Verb = "verb",
}

export const ResultItem = ({ result }: { result: DictionaryResult }) => {
	const audioItem = result.phonetics.find((phonetic) => phonetic.audio !== "");
	const nounMeaning = result.meanings.find(
		(meaning) => meaning.partOfSpeech === MeaningType.Noun,
	);
	const verbMeaning = result.meanings.find(
		(meaning) => meaning.partOfSpeech === MeaningType.Verb,
	);

	return (
		<section>
			<div className="flex items-center justify-between gap-4 mb-8">
				<ResultItemWordInfo word={result.word} phonetic={result.phonetic} />
				{audioItem && <ResultItemAudioButton id={result.id} item={audioItem} />}
			</div>
			{nounMeaning && <ResultItemMeaning title="Noun" meaning={nounMeaning} />}
			{verbMeaning && <ResultItemMeaning title="Verb" meaning={verbMeaning} />}
			<ResultItemSources sources={result.sourceUrls} />
		</section>
	);
};
