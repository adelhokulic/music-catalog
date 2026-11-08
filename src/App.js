import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import Others from "./pages/Others";
import { useEffect, useState } from "react";

function App() {
	const [favorites, setFavorites] = useState(
		JSON.parse(localStorage.getItem("favorites")) || [],
	);

	const favoriteAlbums = (id) => {
		if (!favorites.includes(id)) {
			setFavorites([...favorites, id]);
		} else {
			setFavorites(favorites.filter((selectedAlbum) => selectedAlbum !== id));
		}
	};
	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Home favorites={favorites} favoriteAlbums={favoriteAlbums} />
					}
				/>
				<Route path="/album/:id" element={<AlbumPage />} />
				<Route
					path="/artist/:name"
					element={
						<ArtistPage favorites={favorites} favoriteAlbums={favoriteAlbums} />
					}
				/>
				<Route path="*" element={<Others />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
