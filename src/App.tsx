import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { createGuid } from "./helpers/guid";
import { DictionaryService } from "./services/dictionary.service";
import { DictionaryQuery, DictionaryResult } from "./store/dictionary.store";
import { ResultItem } from "./components/ResultItem";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
	const query = useStore(DictionaryQuery);
	const [results, setResults] = useState([] as DictionaryResult[]);

	const resultsWithId = results.length
		? results.map((result: DictionaryResult) => {
				return {
					...result,
					id: createGuid(),
				};
		  })
		: [];

	useEffect(() => {
		const getResults = setTimeout(async () => {
			if (query === "") return;

			const response = await DictionaryService.GetResults(query);

			if (response.length === 0) {
				setResults([]);
			} else {
				setResults(response);
			}
		}, 500);

		return () => clearTimeout(getResults);
	}, [query]);

	return (
		<section className="container">
			<SearchBar />
			<div className="mt-4">
				{resultsWithId.length ? (
					resultsWithId.map((result: DictionaryResult) => (
						<ResultItem key={result.id} result={result} />
					))
				) : (
					<p className="text-lg">No results found.</p>
				)}
			</div>
		</section>
	);
};
