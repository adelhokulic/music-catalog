const GenreFilter = ({ genres, onGenreChange }) => {
	return (
		<select onChange={(e) => onGenreChange(e.target.value)}>
			<option value="">All</option>
			{genres.map((genre) => {
				return (
					<option key={genre} value={genre}>
						{genre}
					</option>
				);
			})}
		</select>
	);
};

export default GenreFilter;
