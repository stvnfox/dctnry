import { DictionaryResult } from "../store/dictionary.store";
import { ResultItemAudioButton } from "./ResultItemAudioButton";
import { ResultItemWordInfo } from "./ResultItemWordInfo";
import { ResultItemMeaningNoun } from "./ResultItemMeaningNoun";

export const ResultItem = ({ result }: { result: DictionaryResult }) => {
	const audioItem = result.phonetics.find((phonetic) => phonetic.audio !== "");
	const nounMeaning = result.meanings.find(
		(meaning) => meaning.partOfSpeech === "noun",
	);

	return (
		<section>
			<div className="flex items-center justify-between gap-4 mb-8">
				<ResultItemWordInfo word={result.word} phonetic={result.phonetic} />
				{audioItem && <ResultItemAudioButton id={result.id} item={audioItem} />}
			</div>
			{nounMeaning && <ResultItemMeaningNoun meaning={nounMeaning} />}
		</section>
	);
};
