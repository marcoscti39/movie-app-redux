import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContentCard from "../components/ContentCard";
import SectionOfContent from "../components/SectionOfContent";
import {
  fetchMoviesForMainPage,
  fetchSeriesForMainPage,
} from "../redux/movieSlice";
import { AppDispatch, RootState } from "../redux/store";

const Home = () => {
  const moviesData = useSelector((state: RootState) => state.movie.value);
  const seriesData = useSelector((state: RootState) => state.movie.value);

  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchMoviesForMainPage());
    dispatch(fetchSeriesForMainPage());
  }, []);
  console.log(moviesData);
  return (
    <>
      <SectionOfContent title="Movies">
        {moviesData?.movies?.Search?.map((movie, index) => (
          <Link
            key={index}
            to={`/movie-details/${movie.Title}/${movie.imdbID}`}
          >
            <ContentCard {...movie} />
          </Link>
        ))}
      </SectionOfContent>

      <SectionOfContent title="Series">
        {seriesData?.series?.Search?.map((serie, index) => (
          <Link
            key={index}
            to={`/movie-details/${serie.Title}/${serie.imdbID}`}
          >
            <ContentCard {...serie} />
          </Link>
        ))}
      </SectionOfContent>
      <div className="py-20"></div>
    </>
  );
};

export default Home;
