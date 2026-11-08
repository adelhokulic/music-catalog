import "./App.css";
import AlbumList from "./components/AlbumList";
import Search from "./components/Search";
import albums from "./albums.json";

function App() {
	return (
		<>
			<Search />
			<AlbumList albums={albums} />
		</>
	);
}

export default App;
