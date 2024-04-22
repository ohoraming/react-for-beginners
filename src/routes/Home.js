import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies); // 영화 정보
    setLoading(false); // 로딩이 끝났으므로 false로 update
  };
  useEffect(() => {
    getMovies();
  }, []); // useEffect 빈 배열(아무것도 주시하지 않는 상태)은 최초 한 번만 작동함
  return (
    <div>
      {loading ? (
        <h1>"Loading..."</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
