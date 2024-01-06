import { useStore } from "@nanostores/react";
import {
	ClearDictionaryResults,
	DictionaryQuery,
} from "../store/dictionary.store";

export const SearchBar = () => {
	const model = useStore(DictionaryQuery);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		DictionaryQuery.set(event.target.value);
	};

	const removeQuery = () => {
		ClearDictionaryResults();
	};

	return (
		<div className="flex items-center justify-between bg-neutral-100 rounded-md">
			<input
				type="text"
				value={model}
				className="autofill:bg-neutral-100 p-2 w-full bg-neutral-100 rounded-md focus:outline-none"
				name="dctnry-search-bar"
				id="dctnry-search-bar"
				onChange={handleInputChange}
			/>
			<button
				type="button"
				className="pr-2 focus:outline-none"
				onClick={removeQuery}
			>
				{model === "" ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="fill-purple-500 hover:fill-purple-800 transition-colors w-5 h-5"
					>
						<title>Search</title>
						<path
							fillRule="evenodd"
							d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
							clipRule="evenodd"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="fill-purple-500 hover:fill-purple-800 transition-colors w-5 h-5"
					>
						<title>Close</title>
						<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
					</svg>
				)}
			</button>
		</div>
	);
};
