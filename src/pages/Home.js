import AlbumList from "../components/AlbumList";
import Search from "../components/Search";
import albumsJson from "../albums.json";
import { useState } from "react";

const Home = () => {
	const [albums, setAlbums] = useState(albumsJson);
	const [filteredAlbums, setFilteredAlbums] = useState(albumsJson);
	const [search, setSearch] = useState("");

	const onSearch = (newSearch) => {
		const filtered = albums.filter(
			(album) =>
				album.title
					.toLocaleLowerCase()
					.includes(newSearch.toLocaleLowerCase()) ||
				album.artist
					.toLocaleLowerCase()
					.includes(newSearch.toLocaleLowerCase()),
		);
		setFilteredAlbums(filtered);
		setSearch(newSearch);
	};
	return (
		<>
			<Search onSearch={onSearch} />
			<AlbumList albums={filteredAlbums} />
		</>
	);
};

export default Home;
