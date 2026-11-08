import { Link, useParams } from "react-router-dom";
import albums from "../albums.json";
import AlbumList from "../components/AlbumList";
const ArtistPage = ({
	favorites,
	favoriteAlbums,
}) => {
	const params = useParams();
	const filteredAlbums = albums
		.filter((album) => album.artist.toLowerCase() === params.name.toLowerCase())
		.sort((a, b) => a.year - b.year);
	return (
		<main>
			<Link className="album-page__back" to="/">
				Back to home page
			</Link>
			<h1 className="artist-page__title">{params.name}</h1>
			<AlbumList
				favorites={favorites}
				favoriteAlbums={favoriteAlbums}
				albums={filteredAlbums}
			/>
		</main>
	);
};

export default ArtistPage;
