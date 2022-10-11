import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ContentDescriptionType,
  fetchContentDetail,
} from "../redux/contentDetailSlice";
import { AppDispatch, RootState } from "../redux/store";

const MovieDetails = () => {
  const contentDescriptionData = useSelector(
    (state: RootState) => state.contentDetail.value
  );
  const dispatch = useDispatch<AppDispatch>();
  const { movieId } = useParams();
  React.useEffect(() => {
    dispatch(fetchContentDetail(movieId!));
  }, []);
  return (
    <>
      <section className="grid grid-cols-[1fr_400px] max-w-[1300px] mt-8 mx-auto">
        <article className="flex flex-col text-white w-full gap-[1.5rem]">
          <h1 className="text-4xl">{contentDescriptionData?.Title}</h1>
          <div className="flex gap-4 text-blue-700">
            <span>IMDB Rating: {contentDescriptionData?.imdbRating}</span>
            <span>IMDB Votes: {contentDescriptionData?.imdbVotes}</span>
            <span>Runtime: {contentDescriptionData?.Runtime}</span>
            <span>Year: {contentDescriptionData?.Year}</span>
          </div>

          <p className="leading-7 tex-lg">{contentDescriptionData?.Plot}</p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <span className="w-[8rem] font-semibold">Director</span>
              <span className="text-blue-700">
                {contentDescriptionData?.Director}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="w-[8rem] font-semibold">Stars</span>
              <span className="text-blue-700">
                {contentDescriptionData?.Actors}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="w-[8rem] font-semibold">Generes</span>
              <span className="text-blue-700">
                {contentDescriptionData?.Genre}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="w-[8rem] font-semibold">Languages</span>
              <span className="text-blue-700">
                {contentDescriptionData?.Language}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="w-[8rem] font-semibold">Awards</span>
              <span className="text-blue-700">
                {contentDescriptionData?.Awards}
              </span>
            </div>
          </div>
        </article>
        <img
          src={contentDescriptionData?.Poster}
          alt=""
          className="bg-red-700 w-full object-cover"
        />
      </section>
    </>
  );
};

export default MovieDetails;
