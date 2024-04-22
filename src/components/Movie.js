import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={cover_image} alt={title} />
      <h2>
        {/* <a href="movie">{title}</a> */}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
