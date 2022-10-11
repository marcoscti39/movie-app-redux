import React from "react";
import { MoviesOrSeriesTypes } from "../redux/movieSlice";

const ContentCard: React.FC<MoviesOrSeriesTypes> = ({
  Poster,
  Year,
  Title,
}) => {
  return (
    <article className="bg-slate-900 rounded">
      <img
        src={Poster}
        className="w-full h-[250px] bg-blue-500 object-cover"
        alt=""
      />
      <div className="text-white p-3">
        <h2 className="font-semibold text text-lg">{Title}</h2>
        <span>{Year}</span>
      </div>
    </article>
  );
};

export default ContentCard;
