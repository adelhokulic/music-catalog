import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import Others from "./pages/Others";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/album/:id" element={<AlbumPage />} />
				<Route path="/artist/:name" element={<ArtistPage />} />
				<Route path="*" element={<Others />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
