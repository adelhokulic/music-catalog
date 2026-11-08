import AlbumList from "../components/AlbumList";
import Search from "../components/Search";
import albumsJson from "../albums.json";
import { useState } from "react";
import GenreFilter from "../components/GenreFilter";

const Home = () => {
	const [albums, setAlbums] = useState(albumsJson);
	const [filteredAlbums, setFilteredAlbums] = useState(albumsJson);
	const [search, setSearch] = useState("");
	const [genre, setGenre] = useState("");

	const genres = [];
	albums.forEach((album) => {
		if (!genres.includes(album.genre)) {
			genres.push(album.genre);
		}
	});

	const onGenreChange = (newGenre) => {
		setGenre(newGenre);
		filterSearch(search, newGenre);
	};

	const onSearch = (newSearch) => {
		setSearch(newSearch);
		filterSearch(newSearch, genre);
	};

	const filterSearch = (searchTerm, selectedGenre) => {
		const filtered = albums.filter(
			(album) =>
				(album.title
					.toLocaleLowerCase()
					.includes(searchTerm.toLocaleLowerCase()) ||
					album.artist
						.toLocaleLowerCase()
						.includes(searchTerm.toLocaleLowerCase()) ||
					album.songs.some((song) =>
						song.title
							.toLocaleLowerCase()
							.includes(searchTerm.toLocaleLowerCase()),
					)) &&
				(album.genre === selectedGenre || selectedGenre === ""),
		);
		setFilteredAlbums(filtered);
	};
	return (
		<>
			<div className="album-controls">
				<Search onSearch={onSearch} />
				<GenreFilter onGenreChange={onGenreChange} genres={genres} />
			</div>
			<AlbumList albums={filteredAlbums} />
		</>
	);
};

export default Home;
