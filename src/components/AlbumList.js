import AlbumCard from "./AlbumCard";

const AlbumList = ({ albums }) => {
	return (
		<div className="album-list">
			{albums.map((album) => {
				return <AlbumCard key={album.id} album={album} />;
			})}
		</div>
	);
};

export default AlbumList;
