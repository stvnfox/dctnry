import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react"
import { SearchBar } from "./components/SearchBar";
import { DictionaryService } from "./services/dictionary.service";
import { DictionaryQuery, DictionaryResult } from "./store/dictionary.store";

export const App = () => {
  const query = useStore(DictionaryQuery);
  const [results, setResults] = useState([] as DictionaryResult[])

  useEffect(() => {
    const getResults = setTimeout(async () => {
      if(query === "") return

      const response = await DictionaryService.GetResults(query)

      if(response.length === 0) {
        setResults([])
      } else {
        setResults(response)
      }
    }, 500)

    return () => clearTimeout(getResults)
  }, [query])

	return (
		<section className="container">
			<SearchBar/>
      <div className="mt-4">
        {
          results.length ? (
            results.map((result: DictionaryResult, index: number) => (
              <div className="flex flex-col" key={`result-${index}`}>
                <h2 className="text-2xl font-bold">{result.word}</h2>
                <pre className="text-lg">{result.sourceUrls}</pre>
              </div>
            ))
          ) : (
            <p className="text-lg">No results found.</p>
          )
        }
      </div>
		</section>
	);
}
