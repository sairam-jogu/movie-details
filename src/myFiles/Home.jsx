import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../myFiles/home.css";
import { Link } from "react-router-dom";
import Movies from "./Movies";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=d736a51c9aacefa567f5604c57f76b95&language=en-US&page=1`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="posterImage">
                  <img
                    src={`https://www.themoviedb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                    alt={movie.original_title}
                  />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}

                    <span className="posterImage__rating">
                      {movie ? movie.vote_average : ""}
                      <h5>(imdb)</h5>
                    </span>
                  </div>

                  <div className="posterImage__description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            </>
          ))}
        </Carousel>
      </div>
      <Movies />
    </>
  );
};

export default Home;
