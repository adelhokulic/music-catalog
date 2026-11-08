const Sort = ({ onSortChange }) => {
	return (
		<select
			className="album-controls__field album-controls__genre"
			onChange={(e) => onSortChange(e.target.value)}
		>
			<option value="">Default</option>
			<option value="year">Year</option>
			<option value="title">Title</option>
		</select>
	);
};

export default Sort;
