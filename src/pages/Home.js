import AlbumList from "../components/AlbumList";
import Search from "../components/Search";
import albums from "../albums.json";

const Home = () => {
	return (
		<>
			<Search />
			<AlbumList albums={albums} />
		</>
	);
};

export default Home;
