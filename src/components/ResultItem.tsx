import { DictionaryResult } from "../store/dictionary.store";
import { ResultItemAudioButton } from "./ResultItemAudioButton";

export const ResultItem = ({ result }: { result: DictionaryResult }) => {
	const audioItem = result.phonetics.find((phonetic) => phonetic.audio !== "");

	return (
		<section>
			<div className="flex items-center gap-4">
				<div>
					<h2 className="text-2xl font-bold">{result.word}</h2>
					<p className="text-lg">{result.phonetic}</p>
				</div>
				{audioItem && <ResultItemAudioButton id={result.id} item={audioItem} />}
			</div>
		</section>
	);
};
