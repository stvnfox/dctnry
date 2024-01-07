import { FontChanger } from "./FontChanger";
import { ThemeChanger } from "./ThemeChanger";

export const NavigationComponent = () => {
	return (
		<section className="flex items-center justify-between mb-12">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="stroke-purple-500 w-10 h-10"
			>
				<title>dctnry logo</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
				/>
			</svg>
			<div className="flex items-center gap-4">
				<FontChanger />
				<ThemeChanger />
			</div>
		</section>
	);
};
