import { DictionaryResult } from "../store/dictionary.store";

export const ResultItem = ({ result }: {result: DictionaryResult}) => {
    return (
        <>
            {JSON.stringify(result)}
        </>
    )
}