import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, poster_path, title, overview, convertGenre }) {
  return (
    <ul>
      <li key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          style={{ width: "300px" }}
        />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{overview}</p>
        <p>{convertGenre}</p>
      </li>
    </ul>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  convertGenre: PropTypes.func.isRequired,
};
export default Movie;
