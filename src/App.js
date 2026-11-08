import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/album/:id" element={<AlbumPage />} />
				<Route path="/artist/:name" element={<ArtistPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
