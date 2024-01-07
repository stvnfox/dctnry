export const ResultItemSources = ({ sources }: { sources: string[] }) => {
	return (
		<div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 border-t border-neutral-200 mt-8 pt-4">
			<h5 className="text-xs text-neutral-400">Source</h5>
			{sources.map((source, index) => (
				<a
					key={`source-${index}`}
					href={source}
					target="_blank"
					rel="noreferrer noopener"
					className="group flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-200 underline hover:no-underline transition-colors"
				>
					{source}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-4 h-4"
					>
						<title>External Link</title>
						<path
							fillRule="evenodd"
							d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
							clipRule="evenodd"
						/>
						<path
							fillRule="evenodd"
							d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
							clipRule="evenodd"
						/>
					</svg>
				</a>
			))}
		</div>
	);
};
