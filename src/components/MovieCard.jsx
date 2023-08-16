import React from "react";
import { Link, useParams } from "react-router-dom";

const getPoster = (posterPath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};

const MovieCard = ({
  poster_path,
  title,
  name,
  release_date,
  overview,
  first_air_date,
  id,
  media_type,
  onClick,
}) => {
  const { type } = useParams();
  return (
    <Link
      onClick={onClick}
      to={`/${type ? type : media_type || "movie"}/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      {/* <div className="card-group">
            <div className="card">
                <img src={getPoster(poster_path)} alt={title||name} className="card-img-top " />
                <div className="layer">
                    <p>{overview}</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {title||name}
                    </h5>
                    <p className="card-text">{release_date||first_air_date}</p>
                </div>
            </div>

        </div> */}
      <div className="card text-white">
        <img
          src={getPoster(poster_path)}
          alt={title || name}
          className="card-img-top "
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{title || name}</h5>
          <p className="card-text">{release_date || first_air_date}</p>
          <p className="card-text">{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
