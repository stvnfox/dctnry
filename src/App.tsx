import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { DictionaryService } from "./services/dictionary.service";

function App() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  
  const getResults = (input: string) => {
    setQuery(input)
  }

  const resetResults = () => {
    setResults([])
  }

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
			<SearchBar onSearch={(input: string) => getResults(input)} clearQuery={resetResults}/>
      <div className="mt-4">
        {
          results.length ? (
            results.map((result: any, index: number) => (
              <div className="flex flex-col" key={`result-${index}`}>
                <h2 className="text-2xl font-bold">{result.word}</h2>
                <p className="text-lg">{result.definition}</p>
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

export default App;
