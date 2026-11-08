import { Link } from "react-router-dom";

const Others = () => {
	return (
		<main className="album-page album-page--missing">
			<h1 className="album-page__title">Page not found.</h1>
			<Link className="album-page__back" to="/">
				Back to home page
			</Link>
		</main>
	);
};

export default Others;
