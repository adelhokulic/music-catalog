import AlbumCard from "./AlbumCard";

const AlbumList = ({ albums }) => {
	if (albums.length === 0) {
		return (
			<main className="album-page album-page--missing">
				<h1 className="album-page__title">No albums found.</h1>
			</main>
		);
	}
	return (
		<div className="album-list">
			{albums.map((album) => {
				return <AlbumCard key={album.id} album={album} />;
			})}
		</div>
	);
};

export default AlbumList;
