export const NoResults = ({ searched }: { searched: boolean }) => {
	return (
		<div>
			{searched ? (
				<p className="text-lg">No results found.</p>
			) : (
				<p className="text-lg">Search for a word.</p>
			)}
		</div>
	);
};
