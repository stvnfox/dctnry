import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { createGuid } from "./helpers/guid";
import { DictionaryService } from "./services/dictionary.service";
import { DictionaryQuery, DictionaryResult } from "./store/dictionary.store";
import { NavigationComponent } from "./components/NavigationComponent";
import { NoResults } from "./components/NoResults";
import { ResultItem } from "./components/ResultItem";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
	const query = useStore(DictionaryQuery);
	const [results, setResults] = useState([] as DictionaryResult[]);
	const [hasSearched, setHasSearchedValue] = useState(false);

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
			if (query === "") {
				setResults([]);
				setHasSearchedValue(false);
				return;
			}

			const response: DictionaryResult[] =
				await DictionaryService.GetResults(query);

			if (response.length === 0) {
				setResults([]);
			} else {
				setResults(response);
			}

			setHasSearchedValue(true);
		}, 500);

		return () => clearTimeout(getResults);
	}, [query]);

	return (
		<section className="dark:bg-neutral-900 min-h-screen w-screen transition-colors">
			<div className="w-5/6 lg:w-3/5 mx-auto py-8">
				<NavigationComponent />
				<SearchBar />
				<div className="mt-8">
					{resultsWithId.length ? (
						resultsWithId.map((result: DictionaryResult) => (
							<ResultItem key={result.id} result={result} />
						))
					) : (
						<NoResults searched={hasSearched} />
					)}
				</div>
			</div>
		</section>
	);
};
