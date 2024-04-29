import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie); // 영화 세부 정보
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
    {loading ? (
      <h1>"Loading..."</h1>
    ) : (
      <div>
        <h2>{movie.title_long}</h2>
        <img src={movie.medium_cover_image} alt={movie.title_long}></img>
        <h3>Description</h3>
        <p>{movie.description_full}</p>
      </div>
      )}
    </div>
  );
}

export default Detail;
