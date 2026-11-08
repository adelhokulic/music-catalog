import AlbumList from "../components/AlbumList";
import Search from "../components/Search";
import albumsJson from "../albums.json";
import { useState } from "react";
import GenreFilter from "../components/GenreFilter";
import Sort from "../components/Sort";

const Home = () => {
	const [albums, setAlbums] = useState(albumsJson);
	const [filteredAlbums, setFilteredAlbums] = useState(albumsJson);
	const [search, setSearch] = useState("");
	const [genre, setGenre] = useState("");
	const [sort, setSort] = useState("");

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

	const onSortChange = (newSort) => {
		setSort(newSort);
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

	const sortedAlbums = [...filteredAlbums];

	if (sort === "year") {
		sortedAlbums.sort((a, b) => a.year - b.year);
	}

	if (sort === "title") {
		sortedAlbums.sort((a, b) => a.title.localeCompare(b.title));
	}

	return (
		<>
			<div className="album-controls">
				<Search onSearch={onSearch} />
				<GenreFilter onGenreChange={onGenreChange} genres={genres} />
				<Sort onSortChange={onSortChange} />
			</div>
			<AlbumList albums={sortedAlbums} />
		</>
	);
};

export default Home;
