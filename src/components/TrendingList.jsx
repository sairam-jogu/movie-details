import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const TrendingList = () => {
  const [movies, setMovies] = useState([]);
  let url = `https://api.themoviedb.org/3/trending/all/day?api_key=d736a51c9aacefa567f5604c57f76b95`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="main-heading">
        <h1 className="big-heading p-3 text-center text-white">
          <span className="logo">Trending in 2023!!</span>{" "}
        </h1>
      </div>
      <section className="trending">
        <div className="container p-2">
          <div className="myClass  gap-2">
            {movies.map((movie, index) => {
              return <MovieCard key={index} {...movie} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingList;
