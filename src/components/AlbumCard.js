import { Link } from "react-router-dom";
const AlbumCard = ({ album }) => {
	return (
		<Link className="album-card__link" to={`/album/${album.id}`}>
			<article className="album-card">
				<img
					className="album-card__cover"
					src={album.cover}
					alt={`Omot albuma ${album.title}`}
				/>
				<div className="album-card__body">
					<h2 className="album-card__title">{album.title}</h2>
					<p className="album-card__artist">{album.artist}</p>
					<div className="album-card__meta">
						<span>{album.year}</span>
						<span className="album-card__genre">{album.genre}</span>
					</div>
				</div>
			</article>
		</Link>
	);
};

export default AlbumCard;
