import { useParams } from "react-router-dom";
import albums from "../albums.json";
import AlbumList from "../components/AlbumList";
const ArtistPage = () => {
	const params = useParams();
	const filteredAlbums = albums
		.filter((album) => album.artist.toLowerCase() === params.name.toLowerCase())
		.sort((a, b) => a.year - b.year);
	return (
		<>
			<h1>{params.name}</h1>
			<AlbumList albums={filteredAlbums} />
		</>
	);
};

export default ArtistPage;
