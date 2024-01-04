import { DictionaryResult } from "../store/dictionary.store";
import { ResultItemAudioButton } from "./ResultItemAudioButton";
import { ResultItemWordInfo } from "./ResultItemWordInfo";

export const ResultItem = ({ result }: { result: DictionaryResult }) => {
	const audioItem = result.phonetics.find((phonetic) => phonetic.audio !== "");

	return (
		<section>
			<div className="flex items-center justify-between gap-4 mb-8">
				<ResultItemWordInfo word={result.word} phonetic={result.phonetic} />
				{audioItem && <ResultItemAudioButton id={result.id} item={audioItem} />}
			</div>
		</section>
	);
};
