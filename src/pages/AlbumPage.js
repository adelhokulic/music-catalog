import { Link, useParams } from "react-router-dom";
import albums from "../albums.json";

const AlbumPage = () => {
	const params = useParams();
	const foundAlbum = albums.find((album) => album.id === Number(params.id));

	const stringToSeconds = (string) => {
		const array = string.split(":");
		const seconds = Number(array[0]) * 60 + Number(array[1]);
		return seconds;
	};
	const secondsToMinutes = (seconds) => {
		const answerMinutes = Math.floor(seconds / 60);
		const answerSeconds = seconds % 60;
		const answer = `${answerMinutes.toString()}:${answerSeconds < 10 ? "0" + answerSeconds.toString() : answerSeconds.toString()}`;
		return answer;
	};

	if (!foundAlbum) {
		return (
			<main className="album-page album-page--missing">
				<h1 className="album-page__title">Album doesn’t exist.</h1>
				<Link className="album-page__back" to="/">
					Back to home page
				</Link>
			</main>
		);
	}
	let sumofSongsDuration = 0;
	foundAlbum.songs.forEach((song) => {
		sumofSongsDuration += stringToSeconds(song.duration);
	});
	return (
		<main className="album-page">
			<Link className="album-page__back" to="/">
				Back to home page
			</Link>
			<header className="album-page__header">
				<img
					className="album-page__cover"
					src={foundAlbum.cover}
					alt={`Omot albuma ${foundAlbum.title}`}
				/>
				<div className="album-page__info">
					<h1 className="album-page__title">{foundAlbum.title}</h1>
					<p className="album-page__artist">
						<Link
							className="album-page__artist-link"
							to={`/artist/${foundAlbum.artist}`}
						>
							{foundAlbum.artist}
						</Link>
					</p>
					<div className="album-page__meta">
						<span>{foundAlbum.year}</span>
						<span className="album-card__genre">{foundAlbum.genre}</span>
					</div>
				</div>
			</header>
			<ul className="album-page__tracks">
				{foundAlbum.songs.map((song) => {
					return (
						<li className="album-page__track" key={song.title}>
							<span>{song.title}</span>
							<span className="album-page__duration">{song.duration}</span>
						</li>
					);
				})}
			</ul>
			<p className="album-page__total">
				Total: {secondsToMinutes(sumofSongsDuration)}
			</p>
		</main>
	);
};
export default AlbumPage;
