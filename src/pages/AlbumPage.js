import { Link, useParams } from "react-router-dom";
import albums from "../albums.json";

const AlbumPage = () => {
	const params = useParams();
	const foundAlbum = albums.find((album) => album.id === Number(params.id));
	if (!foundAlbum) {
		return (
			<>
				<h1>Album doesn’t exist.</h1>
				<Link to="/">Back to home page</Link>
			</>
		);
	}
	return <h1>{foundAlbum.title}</h1>;
};
export default AlbumPage;
