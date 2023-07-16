const HandwrittenHeading = ({ title }: { title: string }) => {
	return (
		<h1 className="w-fit font-handwritten text-6xl font-semibold -rotate-6">
			{title}.
		</h1>
	);
};

export default HandwrittenHeading;
