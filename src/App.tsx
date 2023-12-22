import { useState } from "react"
import { DictionaryService } from "./services/dictionary.service"

function App() {
  const [results, setResults] = useState([])

  const search = async () => {
    const response = await DictionaryService.GetResults("hello")

    setResults(response)
  }

  return (
    <>
      <h1 className="text-2xl text-red-900">Hello, world!</h1>
      <h2 className="italic">Start editing to see some magic happen!</h2>
      <button onClick={search}>Search for hello</button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.word}</li>
        ))}
      </ul>
    </>
  )
}

export default App
