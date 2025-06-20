import React from "react";

const MovieCard = ({
  movie: { title, imdbID, Ratings, Poster, Released, Language },
}) => {
  const imdbRating =
    Ratings?.find((r) => r.Source === "Internet Movie Database")?.Value ||
    "N/A";
  const releaseYear =
    Released !== "N/A" ? new Date(Released).getFullYear() : "Unknown";

  return (
    <div className="movie-card">
      <img src={Poster ? Poster : "/no-movie.png"} />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="" />
            <p>{imdbRating}</p>
          </div>
          <span>•</span>
          <p className="lang">{Language}</p>
          <span>•</span>
          <p className="year">{releaseYear}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
